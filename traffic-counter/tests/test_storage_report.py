"""事件儲存與每小時表單彙總測試。"""

from __future__ import annotations

from datetime import datetime

from traffic_counter.report import add_daily_totals, build_hourly_table
from traffic_counter.storage import Crossing, EventStore


def _seed_store(db_path):
    store = EventStore(db_path)
    # 7/3：08 時 3 台（含 1 台反向）、17 時 2 台
    # 7/4：09 時 1 台
    events = [
        Crossing("cam", datetime(2026, 7, 3, 8, 5), "down"),
        Crossing("cam", datetime(2026, 7, 3, 8, 20), "down"),
        Crossing("cam", datetime(2026, 7, 3, 8, 45), "up"),
        Crossing("cam", datetime(2026, 7, 3, 17, 10), "down"),
        Crossing("cam", datetime(2026, 7, 3, 17, 30), "up"),
        Crossing("cam", datetime(2026, 7, 4, 9, 0), "down"),
    ]
    store.add_many(events)
    return store


def test_hourly_counts(tmp_path):
    store = _seed_store(tmp_path / "t.db")
    counts = store.hourly_counts(camera="cam", dates=["2026-07-03", "2026-07-04"])

    assert counts[("2026-07-03", 8)]["total"] == 3
    assert counts[("2026-07-03", 8)]["down"] == 2
    assert counts[("2026-07-03", 8)]["up"] == 1
    assert counts[("2026-07-03", 17)]["total"] == 2
    assert counts[("2026-07-04", 9)]["total"] == 1
    assert store.total("cam") == 6


def test_hourly_table_shape(tmp_path):
    store = _seed_store(tmp_path / "t.db")
    dates = ["2026-07-03", "2026-07-04"]
    df = build_hourly_table(store, dates)

    # 兩天 × 24 小時
    assert len(df) == 48
    assert set(df["日期"]) == set(dates)
    # 每天各 24 列
    assert (df["日期"] == "2026-07-03").sum() == 24
    # 總車流量 = 6
    assert df["車流量"].sum() == 6
    # 特定小時值正確
    row = df[(df["日期"] == "2026-07-03") & (df["時段"] == "08:00-08:59")]
    assert int(row["車流量"].iloc[0]) == 3


def test_daily_totals(tmp_path):
    store = _seed_store(tmp_path / "t.db")
    df = build_hourly_table(store, ["2026-07-03", "2026-07-04"])
    df2 = add_daily_totals(df)
    totals = df2[df2["時段"] == "全日總計"]
    assert len(totals) == 2
    d0703 = totals[totals["日期"] == "2026-07-03"]["車流量"].iloc[0]
    assert int(d0703) == 5
