"""車輛偵測器。

提供兩種後端：
  * MotionDetector：背景相減（MOG2）+ 形態學處理，不需下載任何模型，
    適合固定角度的路況攝影機，是預設後端。
  * YoloDetector：選用，需安裝 ultralytics；準確度較高但需下載模型權重。

每個偵測器都回傳 [(cx, cy, w, h), ...]（中心座標與寬高）的偵測框清單。
"""

from __future__ import annotations

from dataclasses import dataclass
from typing import Protocol

import cv2
import numpy as np

Detection = tuple[float, float, float, float]  # cx, cy, w, h


class Detector(Protocol):
    def detect(self, frame: np.ndarray) -> list[Detection]:
        ...


@dataclass
class MotionDetector:
    """以背景相減偵測移動中的車輛。

    min_area / max_area 以「畫面面積比例」表示，方便適應不同解析度。
    """

    min_area_ratio: float = 0.0015
    max_area_ratio: float = 0.60
    history: int = 300
    var_threshold: float = 40.0
    detect_shadows: bool = True

    def __post_init__(self) -> None:
        self._bg = cv2.createBackgroundSubtractorMOG2(
            history=self.history,
            varThreshold=self.var_threshold,
            detectShadows=self.detect_shadows,
        )
        self._kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))

    def detect(self, frame: np.ndarray) -> list[Detection]:
        h, w = frame.shape[:2]
        frame_area = float(h * w)
        min_area = self.min_area_ratio * frame_area
        max_area = self.max_area_ratio * frame_area

        mask = self._bg.apply(frame)
        # 去除 MOG2 的陰影（灰階 127），只保留確定的前景
        _, mask = cv2.threshold(mask, 200, 255, cv2.THRESH_BINARY)
        mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, self._kernel, iterations=1)
        mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, self._kernel, iterations=2)
        mask = cv2.dilate(mask, self._kernel, iterations=1)

        contours, _ = cv2.findContours(
            mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE
        )
        detections: list[Detection] = []
        for c in contours:
            area = cv2.contourArea(c)
            if area < min_area or area > max_area:
                continue
            x, y, bw, bh = cv2.boundingRect(c)
            detections.append((x + bw / 2.0, y + bh / 2.0, float(bw), float(bh)))
        return detections


@dataclass
class YoloDetector:
    """以 ultralytics YOLO 偵測車輛（選用後端）。"""

    model_path: str = "yolov8n.pt"
    conf: float = 0.30
    # COCO 類別：2=car, 3=motorcycle, 5=bus, 7=truck
    vehicle_classes: tuple[int, ...] = (2, 3, 5, 7)

    def __post_init__(self) -> None:
        try:
            from ultralytics import YOLO
        except ImportError as exc:  # pragma: no cover - 取決於環境
            raise RuntimeError(
                "使用 YOLO 後端需先安裝 ultralytics：pip install ultralytics"
            ) from exc
        self._model = YOLO(self.model_path)

    def detect(self, frame: np.ndarray) -> list[Detection]:
        results = self._model.predict(
            frame, conf=self.conf, classes=list(self.vehicle_classes), verbose=False
        )
        detections: list[Detection] = []
        for r in results:
            if r.boxes is None:
                continue
            for box in r.boxes.xyxy.cpu().numpy():
                x1, y1, x2, y2 = box[:4]
                detections.append(
                    ((x1 + x2) / 2.0, (y1 + y2) / 2.0, x2 - x1, y2 - y1)
                )
        return detections


def build_detector(name: str, **kwargs) -> Detector:
    name = (name or "motion").lower()
    if name == "motion":
        return MotionDetector(**kwargs)
    if name == "yolo":
        return YoloDetector(**kwargs)
    raise ValueError(f"未知的偵測器：{name}（可用：motion, yolo）")
