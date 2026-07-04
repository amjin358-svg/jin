# 台南路況 CCTV 車流量計數系統

從路況攝影機（CCTV）即時影像或影片檔，自動偵測並統計車輛通過數量，
彙總成「每小時車流量」表單（CSV / Excel / HTML）。

## 功能

- **攝影機清單查詢**：直接抓取臺南市政府資料開放平台的路況攝影機（CCTV）清單，
  可依關鍵字、行政區搜尋，取得即時影像串流網址。
- **車輛偵測 + 跨線計數**：
  - `motion`（預設）：OpenCV 背景相減（MOG2）+ 質心追蹤 + 跨線計數，**免下載模型**，適合固定角度路況攝影機。
  - `yolo`（選用）：需安裝 `ultralytics`，準確度較高。
- **每小時彙總**：跨線事件寫入 SQLite，依「日期 × 小時」彙總。
- **表單輸出**：一次產生 CSV、Excel、HTML 三種每小時車流量表。

## 安裝

```bash
pip install -r requirements.txt
# 選用（啟用 YOLO 後端）
# pip install ultralytics
```

## 使用

### 1. 查詢攝影機

```bash
python -m traffic_counter list-cameras --keyword 中山 --district 仁德區
# 存下完整清單供離線使用
python -m traffic_counter list-cameras --save cameras.json
```

> 注意：白河區在台南市公開 CCTV 開放資料中目前**沒有**攝影機；
> 若要統計白河區中山路，需自備該路段的影片檔或串流網址。

#### 距白河區中山路最近的攝影機

由於白河區無官方攝影機，`cameras_near_baihe.json` 依座標距離列出**離白河區中山路最近的 10 支**
市區攝影機（含距離），最近者為柳營區義士路五段口（約 12.4 km，屬不同城鎮，僅供參考）：

```bash
# 瀏覽這份清單
python -m traffic_counter list-cameras --source cameras_near_baihe.json

# 直接取用最近的攝影機串流計數（需在可連到台南串流的網路環境執行）
python -m traffic_counter count-video \
    --source "https://trafficvideo3.tainan.gov.tw/1cb263d2" \
    --camera "柳營區義士路五段(距白河最近)" --db data/traffic.db
```

### 2. 計數（影片檔或串流）

```bash
# 對影片檔計數，並把幀對應到真實時間（例如某天的錄影）
python -m traffic_counter count-video \
    --source clip.mp4 --camera "仁德區中山路" \
    --base-time 2026-07-03T08:00:00 \
    --line 0,0.5,1,0.5 \
    --annotate annotated.mp4 \
    --db data/traffic.db

# 對即時串流持續計數（Ctrl+C 結束）
python -m traffic_counter monitor \
    --url https://trafficvideoX.tainan.gov.tw/xxxx --camera "仁德區中山路" \
    --db data/traffic.db
```

- `--line x1,y1,x2,y2`：計數線，座標為畫面比例（0~1）。預設為水平中線 `0,0.5,1,0.5`。
- `--base-time`：影片起始時間；每一幀時間 = 起始時間 + 幀序 / fps，可把一段錄影對應到指定日期時段。
- 無 `--base-time` 時（如 `monitor`）使用系統當下時間。

### 3. 產生每小時車流量表單

```bash
python -m traffic_counter report \
    --db data/traffic.db \
    --start 2026-07-03 --end 2026-07-04 \
    --out reports --camera "仁德區中山路"
```

產出：
- `reports/hourly_traffic.csv`（含 UTF-8 BOM，Excel 可直接開）
- `reports/hourly_traffic.xlsx`
- `reports/hourly_traffic.html`（可直接用瀏覽器檢視）

## 快速示範（合成影片）

無需真實攝影機也能驗證整套流程：

```bash
python scripts/make_sample_video.py --out sample.mp4 --down 10 --up 4
python -m traffic_counter count-video --source sample.mp4 --camera demo \
    --base-time 2026-07-03T08:00:00 --annotate annotated.mp4 --db data/demo.db
python -m traffic_counter report --db data/demo.db \
    --start 2026-07-03 --end 2026-07-03 --out reports
```

## 測試

```bash
python -m pytest -q
```

## 架構

```
traffic_counter/
  catalog.py    # 台南 CCTV 攝影機清單抓取 / 搜尋
  capture.py    # 影片檔 / 串流抓幀
  detectors.py  # MotionDetector（預設）/ YoloDetector（選用）
  counter.py    # 質心追蹤 + 跨線計數
  pipeline.py   # 串接偵測→追蹤→計數→寫入，並可輸出標註影片
  storage.py    # SQLite 事件儲存 + 每小時彙總
  report.py     # CSV / Excel / HTML 表單輸出
  cli.py        # 命令列介面
scripts/
  make_sample_video.py  # 合成交通影片產生器（測試 / 示範）
tests/          # 端到端與彙總測試
```

## 限制與說明

- **準確度**：`motion` 後端適合車流順暢、角度固定的路口；車輛嚴重重疊、夜間、
  惡劣天候會降低準確度，建議改用 `yolo` 後端。計數採「虛擬線跨越」，需依攝影機角度
  以 `--line` 調整計數線位置。
- **歷史影像**：官方 CCTV 僅提供即時串流、不保存歷史錄影，因此**過去日期**的車流量
  無法回溯，只能對「未來」持續收集，或處理自備的錄影檔。
- **網路存取**：台南市政府影像串流主機可能限制來源 IP；若無法連線，請在可連到該來源的
  機器上執行，或改用自備影片檔。
