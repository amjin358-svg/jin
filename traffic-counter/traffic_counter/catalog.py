"""台南市路況攝影機（CCTV）清單抓取與搜尋。

資料來源：臺南市政府資料開放平台
  資料集：臺南市路況攝影機(CCTV)位置影像資料
  JSON API：https://soa.tainan.gov.tw/Api/Service/Get/<resource_id>
  網頁版（含內嵌 JSON，備援用）：https://data.tainan.gov.tw/Resource/<resource_id>?handler=GoJson

每筆資料格式：
  {"Location": "仁德區 中山路與文華路三段口北桿(向南)-廣角",
   "wgsx": "120.244105", "wgsy": "22.974222",
   "url": "https://trafficvideo4.tainan.gov.tw/8153a080"}
"""

from __future__ import annotations

import html
import json
import re
from dataclasses import dataclass, asdict
from pathlib import Path
from typing import Iterable

import requests

RESOURCE_ID = "4cabeb5d-f234-4cdc-a724-0f5fac90b1de"
API_URL = f"https://soa.tainan.gov.tw/Api/Service/Get/{RESOURCE_ID}"
WEB_URL = f"https://data.tainan.gov.tw/Resource/{RESOURCE_ID}?handler=GoJson"

_DISTRICT_RE = re.compile(r"([\u4e00-\u9fff]{1,3}區)")


@dataclass(frozen=True)
class Camera:
    """一支路況攝影機。"""

    location: str
    lon: float | None
    lat: float | None
    url: str

    @property
    def district(self) -> str | None:
        """從 location 推斷行政區（若有標示）。"""
        m = _DISTRICT_RE.match(self.location.strip())
        return m.group(1) if m else None

    def to_dict(self) -> dict:
        d = asdict(self)
        d["district"] = self.district
        return d


def _parse_records(records: Iterable[dict]) -> list[Camera]:
    cameras: list[Camera] = []
    for r in records:
        loc = (r.get("Location") or r.get("location") or "").strip()
        url = (r.get("url") or r.get("URL") or "").strip()
        if not url:
            continue

        def _f(v):
            try:
                return float(v)
            except (TypeError, ValueError):
                return None

        cameras.append(
            Camera(
                location=loc,
                lon=_f(r.get("wgsx") or r.get("lon")),
                lat=_f(r.get("wgsy") or r.get("lat")),
                url=url,
            )
        )
    return cameras


def _extract_embedded_json(html_text: str) -> list[dict]:
    """從資料開放平台網頁的 <pre> 區塊解析內嵌 JSON（API 主機不可達時的備援）。"""
    m = re.search(
        r'<pre v-show="sourceType === type\.json">(.*?)</pre>',
        html_text,
        re.S,
    )
    if not m:
        raise ValueError("在網頁中找不到內嵌的 JSON 資料")
    return json.loads(html.unescape(m.group(1)))


def fetch_cameras(timeout: float = 30.0) -> list[Camera]:
    """從線上抓取攝影機清單。先試 JSON API，失敗則改用網頁內嵌 JSON。"""
    errors: list[str] = []

    try:
        resp = requests.get(API_URL, timeout=timeout, verify=False)
        resp.raise_for_status()
        return _parse_records(resp.json())
    except Exception as exc:  # noqa: BLE001 - 記錄後改走備援
        errors.append(f"JSON API 失敗：{exc}")

    try:
        resp = requests.get(WEB_URL, timeout=timeout)
        resp.raise_for_status()
        return _parse_records(_extract_embedded_json(resp.text))
    except Exception as exc:  # noqa: BLE001
        errors.append(f"網頁備援失敗：{exc}")

    raise RuntimeError("無法取得攝影機清單：\n  " + "\n  ".join(errors))


def load_cameras(path: str | Path) -> list[Camera]:
    """從本機 JSON 檔載入攝影機清單（可為 API 格式或本工具匯出的格式）。"""
    data = json.loads(Path(path).read_text(encoding="utf-8"))
    return _parse_records(data)


def save_cameras(cameras: Iterable[Camera], path: str | Path) -> None:
    """把攝影機清單存成 JSON（含推斷的行政區）。"""
    payload = [c.to_dict() for c in cameras]
    Path(path).write_text(
        json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8"
    )


def search(cameras: Iterable[Camera], *keywords: str) -> list[Camera]:
    """回傳 location 同時包含所有關鍵字的攝影機（不分大小寫）。"""
    kws = [k.strip().lower() for k in keywords if k and k.strip()]
    result = []
    for c in cameras:
        loc = c.location.lower()
        if all(k in loc for k in kws):
            result.append(c)
    return result
