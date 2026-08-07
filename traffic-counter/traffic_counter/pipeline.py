"""把偵測器、追蹤器、計數線與儲存串起來的處理管線。"""

from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime, timedelta

import cv2
import numpy as np

from .capture import FrameSource
from .counter import LineCounter, Point
from .detectors import Detector
from .storage import Crossing, EventStore


@dataclass
class PipelineResult:
    frames: int
    total: int
    up: int
    down: int


def _draw_overlay(
    frame: np.ndarray,
    counter: LineCounter,
    ts: datetime,
) -> np.ndarray:
    h, w = frame.shape[:2]
    a, b = counter._abs_line(w, h)  # noqa: SLF001 - 內部繪圖用
    out = frame.copy()
    cv2.line(out, (int(a[0]), int(a[1])), (int(b[0]), int(b[1])), (0, 0, 255), 2)
    for t in counter.tracker.tracks.values():
        color = (0, 200, 0) if t.counted else (0, 200, 255)
        cv2.circle(out, (int(t.cx), int(t.cy)), 5, color, -1)
        cv2.putText(
            out, str(t.track_id), (int(t.cx) + 6, int(t.cy) - 6),
            cv2.FONT_HERSHEY_SIMPLEX, 0.5, color, 1, cv2.LINE_AA,
        )
    label = f"total={counter.total}  up={counter.count_up}  down={counter.count_down}"
    cv2.rectangle(out, (0, 0), (w, 30), (0, 0, 0), -1)
    cv2.putText(
        out, f"{ts:%Y-%m-%d %H:%M:%S}  {label}", (8, 21),
        cv2.FONT_HERSHEY_SIMPLEX, 0.6, (255, 255, 255), 1, cv2.LINE_AA,
    )
    return out


def process_video(
    source: str | int,
    detector: Detector,
    store: EventStore,
    camera: str,
    *,
    line: tuple[Point, Point] = ((0.0, 0.5), (1.0, 0.5)),
    base_time: datetime | None = None,
    annotate_path: str | None = None,
    max_distance: float = 80.0,
    max_missed: int = 15,
) -> PipelineResult:
    """處理整段影片來源，把跨線事件寫入 store。

    時間戳記：
      * 若給定 base_time，事件時間 = base_time + (frame_index / fps) 秒，
        方便把一段影片對應到特定的日期時間（例如回放某天的錄影）。
      * 否則使用目前的系統時間（適合即時串流）。
    """
    counter = LineCounter(line=line, max_distance=max_distance, max_missed=max_missed)
    src = FrameSource(source)
    fps = src.fps
    w, h = src.size

    writer = None
    if annotate_path:
        fourcc = cv2.VideoWriter_fourcc(*"mp4v")
        writer = cv2.VideoWriter(annotate_path, fourcc, fps, (w, h))

    frame_idx = 0
    pending: list[Crossing] = []
    try:
        for frame in src.frames():
            if w == 0 or h == 0:
                h, w = frame.shape[:2]
            if base_time is not None:
                ts = base_time + timedelta(seconds=frame_idx / fps)
            else:
                ts = datetime.now()

            detections = detector.detect(frame)
            directions = counter.update(detections, w, h)
            for d in directions:
                pending.append(Crossing(camera=camera, ts=ts, direction=d))

            if writer is not None:
                writer.write(_draw_overlay(frame, counter, ts))
            frame_idx += 1
    finally:
        src.release()
        if writer is not None:
            writer.release()

    store.add_many(pending)
    return PipelineResult(
        frames=frame_idx,
        total=counter.total,
        up=counter.count_up,
        down=counter.count_down,
    )
