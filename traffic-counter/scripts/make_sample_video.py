"""產生合成交通影片，供離線測試與示範使用。

在灰色「路面」上，讓已知數量的彩色矩形（模擬車輛）由上往下（及由下往上）
通過畫面中央的計數線，方便驗證計數是否正確。

用法：
  python scripts/make_sample_video.py --out sample.mp4 --down 10 --up 4
"""

from __future__ import annotations

import argparse
import random

import cv2
import numpy as np

W, H = 640, 360
FPS = 20


def _draw_road(frame: np.ndarray) -> None:
    frame[:] = (60, 60, 60)
    # 車道分隔虛線
    for y in range(0, H, 40):
        cv2.rectangle(frame, (W // 2 - 3, y + 8), (W // 2 + 3, y + 26), (200, 200, 200), -1)


def make_video(out_path: str, down: int, up: int, seed: int = 42) -> int:
    rng = random.Random(seed)
    fourcc = cv2.VideoWriter_fourcc(*"mp4v")
    writer = cv2.VideoWriter(out_path, fourcc, FPS, (W, H))

    total = down + up
    # 每台車出場的起始幀，錯開避免完全重疊
    spawn = sorted(rng.sample(range(0, 30 * total, 6), total))
    vehicles = []
    for i in range(total):
        going_down = i < down
        lane_x = rng.randint(80, W // 2 - 60) if going_down else rng.randint(W // 2 + 60, W - 80)
        color = tuple(rng.randint(60, 255) for _ in range(3))
        vw, vh = rng.randint(34, 46), rng.randint(50, 68)
        vehicles.append(
            {
                "start": spawn[i],
                "down": going_down,
                "x": lane_x,
                "color": color,
                "w": vw,
                "h": vh,
                "speed": rng.randint(7, 11),
            }
        )

    last_start = spawn[-1]
    n_frames = last_start + (H // 7) + 40
    for f in range(n_frames):
        frame = np.zeros((H, W, 3), np.uint8)
        _draw_road(frame)
        for v in vehicles:
            age = f - v["start"]
            if age < 0:
                continue
            if v["down"]:
                y = -v["h"] + age * v["speed"]
            else:
                y = H - age * v["speed"]
            if y < -v["h"] or y > H:
                continue
            x = v["x"]
            cv2.rectangle(
                frame,
                (x - v["w"] // 2, int(y)),
                (x + v["w"] // 2, int(y) + v["h"]),
                v["color"],
                -1,
            )
        writer.write(frame)

    writer.release()
    return total


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", default="sample.mp4")
    ap.add_argument("--down", type=int, default=10, help="由上往下的車輛數")
    ap.add_argument("--up", type=int, default=4, help="由下往上的車輛數")
    ap.add_argument("--seed", type=int, default=42)
    args = ap.parse_args()
    total = make_video(args.out, args.down, args.up, args.seed)
    print(f"已產生 {args.out}：共 {total} 台車（down={args.down}, up={args.up}）")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
