"""車流量事件儲存與每小時彙總（SQLite）。

每一次車輛跨越計數線都記錄成一筆 crossing 事件，
之後可依「日期 × 小時」彙總成車流量表。
"""

from __future__ import annotations

import sqlite3
from contextlib import closing
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Iterable

_SCHEMA = """
CREATE TABLE IF NOT EXISTS crossings (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    camera     TEXT    NOT NULL,
    ts         TEXT    NOT NULL,        -- ISO8601，當地時間
    date       TEXT    NOT NULL,        -- YYYY-MM-DD
    hour       INTEGER NOT NULL,        -- 0-23
    direction  TEXT    NOT NULL,        -- 'up' / 'down' / 'na'
    track_id   INTEGER
);
CREATE INDEX IF NOT EXISTS idx_crossings_lookup
    ON crossings (camera, date, hour);
"""


@dataclass
class Crossing:
    camera: str
    ts: datetime
    direction: str = "na"
    track_id: int | None = None


class EventStore:
    """負責寫入跨線事件並產生每小時彙總。"""

    def __init__(self, db_path: str | Path):
        self.db_path = str(db_path)
        Path(self.db_path).parent.mkdir(parents=True, exist_ok=True)
        with closing(self._connect()) as con:
            con.executescript(_SCHEMA)
            con.commit()

    def _connect(self) -> sqlite3.Connection:
        con = sqlite3.connect(self.db_path)
        con.row_factory = sqlite3.Row
        return con

    def add(self, crossing: Crossing) -> None:
        self.add_many([crossing])

    def add_many(self, crossings: Iterable[Crossing]) -> int:
        rows = []
        for c in crossings:
            rows.append(
                (
                    c.camera,
                    c.ts.isoformat(),
                    c.ts.strftime("%Y-%m-%d"),
                    c.ts.hour,
                    c.direction,
                    c.track_id,
                )
            )
        if not rows:
            return 0
        with closing(self._connect()) as con:
            con.executemany(
                "INSERT INTO crossings (camera, ts, date, hour, direction, track_id) "
                "VALUES (?, ?, ?, ?, ?, ?)",
                rows,
            )
            con.commit()
        return len(rows)

    def hourly_counts(
        self,
        camera: str | None = None,
        dates: Iterable[str] | None = None,
    ) -> dict[tuple[str, int], dict[str, int]]:
        """回傳 {(date, hour): {'total': n, 'up': n, 'down': n, 'na': n}}。"""
        sql = "SELECT date, hour, direction, COUNT(*) AS n FROM crossings"
        clauses, params = [], []
        if camera:
            clauses.append("camera = ?")
            params.append(camera)
        date_list = list(dates) if dates else None
        if date_list:
            placeholders = ",".join("?" * len(date_list))
            clauses.append(f"date IN ({placeholders})")
            params.extend(date_list)
        if clauses:
            sql += " WHERE " + " AND ".join(clauses)
        sql += " GROUP BY date, hour, direction"

        result: dict[tuple[str, int], dict[str, int]] = {}
        with closing(self._connect()) as con:
            for row in con.execute(sql, params):
                key = (row["date"], int(row["hour"]))
                bucket = result.setdefault(
                    key, {"total": 0, "up": 0, "down": 0, "na": 0}
                )
                direction = row["direction"] if row["direction"] in bucket else "na"
                bucket[direction] += row["n"]
                bucket["total"] += row["n"]
        return result

    def total(self, camera: str | None = None) -> int:
        sql = "SELECT COUNT(*) FROM crossings"
        params: list = []
        if camera:
            sql += " WHERE camera = ?"
            params.append(camera)
        with closing(self._connect()) as con:
            return int(con.execute(sql, params).fetchone()[0])
