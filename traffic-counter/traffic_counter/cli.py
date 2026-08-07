"""命令列介面。

範例：
  # 1) 查詢台南路況攝影機（實地抓取官方開放資料）
  python -m traffic_counter list-cameras --keyword 中山 --district 仁德區

  # 2) 對影片檔或串流計數，並把每筆跨線事件寫入資料庫
  python -m traffic_counter count-video --source clip.mp4 --camera "仁德區中山路" \
      --base-time 2026-07-03T08:00:00 --annotate annotated.mp4 --db data/traffic.db

  # 3) 針對特定日期區間產生每小時車流量表單
  python -m traffic_counter report --db data/traffic.db \
      --start 2026-07-03 --end 2026-07-04 --out reports --camera "仁德區中山路"
"""

from __future__ import annotations

import argparse
import sys
from datetime import datetime

from . import catalog
from .detectors import build_detector
from .pipeline import process_video
from .report import generate_reports
from .storage import EventStore


def _parse_line(spec: str):
    """解析計數線字串 'x1,y1,x2,y2'（正規化 0~1）。"""
    parts = [float(x) for x in spec.split(",")]
    if len(parts) != 4:
        raise argparse.ArgumentTypeError("計數線格式須為 x1,y1,x2,y2（0~1）")
    return ((parts[0], parts[1]), (parts[2], parts[3]))


def cmd_list_cameras(args) -> int:
    if args.source:
        cameras = catalog.load_cameras(args.source)
    else:
        cameras = catalog.fetch_cameras()

    results = cameras
    if args.keyword:
        results = catalog.search(results, *args.keyword)
    if args.district:
        results = [c for c in results if c.district == args.district]

    print(f"共 {len(results)} 支攝影機符合條件（總清單 {len(cameras)} 支）")
    for c in results[: args.limit]:
        print(f"  [{c.district or '—'}] {c.location}\n      {c.url}")
    if args.save:
        catalog.save_cameras(cameras, args.save)
        print(f"完整清單已存至 {args.save}")
    return 0


def cmd_count_video(args) -> int:
    detector = build_detector(args.detector)
    store = EventStore(args.db)
    base_time = (
        datetime.fromisoformat(args.base_time) if args.base_time else None
    )
    result = process_video(
        args.source,
        detector,
        store,
        camera=args.camera,
        line=args.line,
        base_time=base_time,
        annotate_path=args.annotate,
        max_distance=args.max_distance,
        max_missed=args.max_missed,
    )
    print(
        f"處理完成：{result.frames} 幀，"
        f"車流量總數={result.total}（方向A={result.up}, 方向B={result.down}）"
    )
    print(f"事件已寫入 {args.db}（該攝影機累計 {store.total(args.camera)} 筆）")
    return 0


def cmd_monitor(args) -> int:
    """對即時串流持續計數，直到手動中斷（Ctrl+C）。"""
    detector = build_detector(args.detector)
    store = EventStore(args.db)
    print(f"開始監看 {args.camera}：{args.url}\n（Ctrl+C 結束）")
    try:
        result = process_video(
            args.url,
            detector,
            store,
            camera=args.camera,
            line=args.line,
            base_time=None,
            max_distance=args.max_distance,
            max_missed=args.max_missed,
        )
        print(f"串流結束：累計車流量 {result.total}")
    except KeyboardInterrupt:
        print("\n已停止監看。")
    return 0


def cmd_report(args) -> int:
    store = EventStore(args.db)
    label = ""
    if args.camera:
        label = f"攝影機：{args.camera}｜統計期間 {args.start} ~ {args.end}"
    paths = generate_reports(
        store,
        args.start,
        args.end,
        args.out,
        camera_label=label,
        camera=args.camera,
        include_direction=not args.no_direction,
    )
    print("已產生每小時車流量表單：")
    for kind, path in paths.items():
        print(f"  {kind.upper()}: {path}")
    return 0


def build_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(
        prog="traffic_counter", description="台南路況 CCTV 車流量計數系統"
    )
    sub = p.add_subparsers(dest="command", required=True)

    lc = sub.add_parser("list-cameras", help="查詢台南路況攝影機清單")
    lc.add_argument("--keyword", nargs="*", help="location 關鍵字（可多個，需全部符合）")
    lc.add_argument("--district", help="行政區（例如 仁德區）")
    lc.add_argument("--source", help="改讀本機攝影機清單 JSON（離線用）")
    lc.add_argument("--save", help="把完整清單存成 JSON 檔")
    lc.add_argument("--limit", type=int, default=50, help="最多顯示筆數")
    lc.set_defaults(func=cmd_list_cameras)

    cv = sub.add_parser("count-video", help="對影片檔/串流計數並寫入資料庫")
    cv.add_argument("--source", required=True, help="影片檔路徑或串流網址")
    cv.add_argument("--camera", required=True, help="攝影機名稱（標記用）")
    cv.add_argument("--detector", default="motion", choices=["motion", "yolo"])
    cv.add_argument("--line", type=_parse_line, default=((0.0, 0.5), (1.0, 0.5)),
                    help="計數線 x1,y1,x2,y2（正規化 0~1，預設水平中線）")
    cv.add_argument("--base-time", help="影片起始時間 ISO8601，用於把幀對應到真實時間")
    cv.add_argument("--annotate", help="輸出標註影片路徑（mp4）")
    cv.add_argument("--db", default="data/traffic.db", help="事件資料庫路徑")
    cv.add_argument("--max-distance", type=float, default=80.0)
    cv.add_argument("--max-missed", type=int, default=15)
    cv.set_defaults(func=cmd_count_video)

    mn = sub.add_parser("monitor", help="對即時串流持續計數")
    mn.add_argument("--url", required=True, help="串流網址")
    mn.add_argument("--camera", required=True, help="攝影機名稱")
    mn.add_argument("--detector", default="motion", choices=["motion", "yolo"])
    mn.add_argument("--line", type=_parse_line, default=((0.0, 0.5), (1.0, 0.5)))
    mn.add_argument("--db", default="data/traffic.db")
    mn.add_argument("--max-distance", type=float, default=80.0)
    mn.add_argument("--max-missed", type=int, default=15)
    mn.set_defaults(func=cmd_monitor)

    rp = sub.add_parser("report", help="產生每小時車流量表單")
    rp.add_argument("--db", default="data/traffic.db")
    rp.add_argument("--start", required=True, help="起始日期 YYYY-MM-DD")
    rp.add_argument("--end", required=True, help="結束日期 YYYY-MM-DD")
    rp.add_argument("--out", default="reports", help="輸出資料夾")
    rp.add_argument("--camera", help="只統計此攝影機")
    rp.add_argument("--no-direction", action="store_true", help="不輸出方向欄位")
    rp.set_defaults(func=cmd_report)

    return p


def main(argv: list[str] | None = None) -> int:
    parser = build_parser()
    args = parser.parse_args(argv)
    return args.func(args)


if __name__ == "__main__":
    sys.exit(main())
