"""影像來源抽象：本機影片檔或即時串流網址皆可。

OpenCV 的 VideoCapture 同時支援影片檔、MJPEG/HLS/RTSP 串流網址，
因此兩者共用同一介面。
"""

from __future__ import annotations

from dataclasses import dataclass

import cv2
import numpy as np


@dataclass
class FrameSource:
    """以 OpenCV 開啟影片檔或串流，逐幀讀取。"""

    source: str | int
    reconnect: bool = False

    def __post_init__(self) -> None:
        self._cap = cv2.VideoCapture(self.source)
        if not self._cap.isOpened():
            raise RuntimeError(f"無法開啟影像來源：{self.source}")

    @property
    def fps(self) -> float:
        fps = self._cap.get(cv2.CAP_PROP_FPS)
        return fps if fps and fps > 0 else 25.0

    @property
    def size(self) -> tuple[int, int]:
        w = int(self._cap.get(cv2.CAP_PROP_FRAME_WIDTH))
        h = int(self._cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
        return w, h

    def read(self) -> np.ndarray | None:
        ok, frame = self._cap.read()
        if not ok:
            if self.reconnect:
                self._cap.release()
                self._cap = cv2.VideoCapture(self.source)
                ok, frame = self._cap.read()
                if ok:
                    return frame
            return None
        return frame

    def frames(self):
        while True:
            frame = self.read()
            if frame is None:
                break
            yield frame

    def release(self) -> None:
        self._cap.release()

    def __enter__(self) -> "FrameSource":
        return self

    def __exit__(self, *exc) -> None:
        self.release()
