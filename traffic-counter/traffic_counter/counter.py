"""跨線車流量計數。

流程：
  1. 偵測器回傳每一幀的車輛框中心點。
  2. CentroidTracker 以最近鄰配對，跨幀維持 track ID。
  3. 當某 track 的中心點跨越計數線，計一次車流量並判斷方向。

計數線以正規化座標 (0~1) 定義，因此不受解析度影響：
  水平線 y=0.5 → line=((0.0, 0.5), (1.0, 0.5))
"""

from __future__ import annotations

import math
from dataclasses import dataclass, field

import numpy as np

from .detectors import Detection

Point = tuple[float, float]


@dataclass
class Track:
    track_id: int
    cx: float
    cy: float
    missed: int = 0
    counted: bool = False
    side: int | None = None  # 相對計數線的一側（sign）


class CentroidTracker:
    """簡易最近鄰質心追蹤器。"""

    def __init__(self, max_distance: float = 80.0, max_missed: int = 15):
        self.max_distance = max_distance
        self.max_missed = max_missed
        self._next_id = 0
        self.tracks: dict[int, Track] = {}

    def update(self, detections: list[Detection]) -> dict[int, Track]:
        centers = [(d[0], d[1]) for d in detections]

        if not self.tracks:
            for cx, cy in centers:
                self._spawn(cx, cy)
            return self.tracks

        track_ids = list(self.tracks.keys())
        unmatched_dets = set(range(len(centers)))

        # 建立距離矩陣並以貪婪法配對
        pairs = []
        for ti in track_ids:
            t = self.tracks[ti]
            for di, (cx, cy) in enumerate(centers):
                dist = math.hypot(t.cx - cx, t.cy - cy)
                if dist <= self.max_distance:
                    pairs.append((dist, ti, di))
        pairs.sort(key=lambda p: p[0])

        matched_tracks: set[int] = set()
        for dist, ti, di in pairs:
            if ti in matched_tracks or di not in unmatched_dets:
                continue
            t = self.tracks[ti]
            t.cx, t.cy = centers[di]
            t.missed = 0
            matched_tracks.add(ti)
            unmatched_dets.discard(di)

        # 未配對的既有 track：計 missed，過久則刪除
        for ti in track_ids:
            if ti not in matched_tracks:
                self.tracks[ti].missed += 1
                if self.tracks[ti].missed > self.max_missed:
                    del self.tracks[ti]

        # 未配對的偵測：視為新車
        for di in unmatched_dets:
            cx, cy = centers[di]
            self._spawn(cx, cy)

        return self.tracks

    def _spawn(self, cx: float, cy: float) -> None:
        self.tracks[self._next_id] = Track(self._next_id, cx, cy)
        self._next_id += 1


def _line_side(p: Point, a: Point, b: Point) -> float:
    """回傳點 p 相對於線段 a→b 的側向值（正/負代表不同側）。"""
    return (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0])


@dataclass
class LineCounter:
    """在正規化計數線上累計跨越次數。"""

    line: tuple[Point, Point] = ((0.0, 0.5), (1.0, 0.5))
    max_distance: float = 80.0
    max_missed: int = 15
    tracker: CentroidTracker = field(init=False)
    count_up: int = 0
    count_down: int = 0

    def __post_init__(self) -> None:
        self.tracker = CentroidTracker(self.max_distance, self.max_missed)

    @property
    def total(self) -> int:
        return self.count_up + self.count_down

    def _abs_line(self, w: int, h: int) -> tuple[Point, Point]:
        (x1, y1), (x2, y2) = self.line
        return (x1 * w, y1 * h), (x2 * w, y2 * h)

    def update(self, detections: list[Detection], w: int, h: int) -> list[str]:
        """更新一幀，回傳本幀新發生的跨越方向清單（'up'/'down'）。"""
        a, b = self._abs_line(w, h)
        tracks = self.tracker.update(detections)
        crossings: list[str] = []

        for t in tracks.values():
            side = _line_side((t.cx, t.cy), a, b)
            sign = 1 if side > 0 else (-1 if side < 0 else 0)
            if t.side is None:
                t.side = sign
                continue
            if sign != 0 and sign != t.side and not t.counted:
                direction = "down" if sign > 0 else "up"
                if direction == "up":
                    self.count_up += 1
                else:
                    self.count_down += 1
                t.counted = True
                crossings.append(direction)
            if sign != 0:
                t.side = sign
        return crossings
