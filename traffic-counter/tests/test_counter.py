"""跨線計數的端到端測試（用合成影片）。"""

from __future__ import annotations

import sys
from datetime import datetime
from pathlib import Path

import pytest

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from scripts.make_sample_video import make_video  # noqa: E402

from traffic_counter.detectors import MotionDetector  # noqa: E402
from traffic_counter.pipeline import process_video  # noqa: E402
from traffic_counter.storage import EventStore  # noqa: E402


def test_line_crossing_count(tmp_path):
    video = tmp_path / "sample.mp4"
    expected = make_video(str(video), down=10, up=4, seed=7)
    assert expected == 14

    store = EventStore(tmp_path / "t.db")
    result = process_video(
        str(video),
        MotionDetector(),
        store,
        camera="synthetic",
        base_time=datetime(2026, 7, 3, 8, 0, 0),
    )

    # 允許 ±2 的偵測誤差（合成影片乾淨，通常精準命中）
    assert abs(result.total - expected) <= 2, result
    assert result.frames > 0
    assert store.total("synthetic") == result.total


def test_no_false_counts_on_empty_video(tmp_path):
    """完全靜止（無車）的影片不應產生任何計數。"""
    import cv2
    import numpy as np

    path = tmp_path / "empty.mp4"
    writer = cv2.VideoWriter(str(path), cv2.VideoWriter_fourcc(*"mp4v"), 20, (320, 240))
    for _ in range(60):
        writer.write(np.full((240, 320, 3), 60, np.uint8))
    writer.release()

    store = EventStore(tmp_path / "t.db")
    result = process_video(str(path), MotionDetector(), store, camera="empty")
    assert result.total == 0
