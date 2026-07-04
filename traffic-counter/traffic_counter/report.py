"""每小時車流量表單產出：CSV / Excel / HTML。"""

from __future__ import annotations

from datetime import date, datetime, timedelta
from pathlib import Path
from typing import Iterable

import pandas as pd

from .storage import EventStore


def _date_range(start: str, end: str) -> list[str]:
    d0 = datetime.strptime(start, "%Y-%m-%d").date()
    d1 = datetime.strptime(end, "%Y-%m-%d").date()
    if d1 < d0:
        d0, d1 = d1, d0
    out, cur = [], d0
    while cur <= d1:
        out.append(cur.isoformat())
        cur += timedelta(days=1)
    return out


def build_hourly_table(
    store: EventStore,
    dates: Iterable[str],
    camera: str | None = None,
    include_direction: bool = True,
) -> pd.DataFrame:
    """產生每小時車流量表：每個 (日期, 小時) 一列，補齊 0~23 時。"""
    date_list = list(dates)
    counts = store.hourly_counts(camera=camera, dates=date_list)

    rows = []
    for d in date_list:
        for hour in range(24):
            bucket = counts.get((d, hour), {"total": 0, "up": 0, "down": 0, "na": 0})
            row = {
                "日期": d,
                "時段": f"{hour:02d}:00-{hour:02d}:59",
                "車流量": bucket["total"],
            }
            if include_direction:
                row["方向A"] = bucket["up"]
                row["方向B"] = bucket["down"]
            rows.append(row)

    df = pd.DataFrame(rows)
    return df


def add_daily_totals(df: pd.DataFrame) -> pd.DataFrame:
    """在每個日期後面加一列「當日總計」。"""
    parts = []
    for d, group in df.groupby("日期", sort=False):
        parts.append(group)
        total_row = {"日期": d, "時段": "全日總計", "車流量": int(group["車流量"].sum())}
        for col in ("方向A", "方向B"):
            if col in df.columns:
                total_row[col] = int(group[col].sum())
        parts.append(pd.DataFrame([total_row]))
    return pd.concat(parts, ignore_index=True)


def export_csv(df: pd.DataFrame, path: str | Path) -> None:
    Path(path).parent.mkdir(parents=True, exist_ok=True)
    df.to_csv(path, index=False, encoding="utf-8-sig")


def export_excel(df: pd.DataFrame, path: str | Path) -> None:
    Path(path).parent.mkdir(parents=True, exist_ok=True)
    df.to_excel(path, index=False, sheet_name="每小時車流量")


def export_html(
    df: pd.DataFrame,
    path: str | Path,
    title: str = "每小時車流量統計表",
    subtitle: str = "",
) -> None:
    Path(path).parent.mkdir(parents=True, exist_ok=True)
    table_html = df.to_html(index=False, border=0, classes="traffic-table", escape=False)
    generated = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    html = f"""<!doctype html>
<html lang="zh-Hant">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>{title}</title>
<style>
  :root {{ color-scheme: light dark; }}
  body {{
    font-family: "Noto Sans TC", system-ui, -apple-system, "Segoe UI", sans-serif;
    margin: 0; padding: 32px; background: #0f172a; color: #e2e8f0;
  }}
  .wrap {{ max-width: 860px; margin: 0 auto; }}
  h1 {{ font-size: 1.6rem; margin: 0 0 4px; }}
  .sub {{ color: #94a3b8; margin: 0 0 20px; font-size: .95rem; }}
  .traffic-table {{
    width: 100%; border-collapse: collapse; background: #1e293b;
    border-radius: 12px; overflow: hidden; font-variant-numeric: tabular-nums;
  }}
  .traffic-table th, .traffic-table td {{
    padding: 10px 14px; text-align: center; border-bottom: 1px solid #334155;
  }}
  .traffic-table th {{ background: #334155; color: #f8fafc; position: sticky; top: 0; }}
  .traffic-table tr:hover td {{ background: #273449; }}
  .traffic-table td:first-child, .traffic-table th:first-child {{ text-align: left; }}
  .foot {{ margin-top: 16px; color: #64748b; font-size: .8rem; }}
</style>
</head>
<body>
  <div class="wrap">
    <h1>{title}</h1>
    <p class="sub">{subtitle}</p>
    {table_html}
    <p class="foot">產生時間：{generated}｜資料由車流量計數系統統計</p>
  </div>
</body>
</html>
"""
    Path(path).write_text(html, encoding="utf-8")


def generate_reports(
    store: EventStore,
    start_date: str,
    end_date: str,
    out_dir: str | Path,
    camera_label: str = "",
    include_direction: bool = True,
    with_daily_totals: bool = True,
) -> dict[str, str]:
    """一次產生 CSV / Excel / HTML 三種表單，回傳各檔案路徑。"""
    out = Path(out_dir)
    out.mkdir(parents=True, exist_ok=True)
    dates = _date_range(start_date, end_date)

    df = build_hourly_table(store, dates, include_direction=include_direction)
    df_out = add_daily_totals(df) if with_daily_totals else df

    subtitle = camera_label or f"統計期間：{dates[0]} ~ {dates[-1]}"
    paths = {
        "csv": str(out / "hourly_traffic.csv"),
        "xlsx": str(out / "hourly_traffic.xlsx"),
        "html": str(out / "hourly_traffic.html"),
    }
    export_csv(df_out, paths["csv"])
    export_excel(df_out, paths["xlsx"])
    export_html(df_out, paths["html"], subtitle=subtitle)
    return paths
