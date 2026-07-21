# 台灣即時氣象與停班停課資訊平台

這是一個純前端網站，提供：

- 台灣各縣市即時天氣資訊（溫度、濕度、風速、降雨量）
- 鄉鎮級天氣資訊（體感溫度、降雨機率、雲量、氣壓）
- 未來 12 小時降雨機率
- 降雨預測與 24 小時累積雨量估算
- 停班停課通知整合顯示（連結官方公告來源）
- 全台政府國道 CCTV 路口監控清單（近距排序、關鍵字篩選）
- 高對比精簡地圖（可拖曳圖層順序、積淹水警示區塊）
- AI 災害提醒、颱風分析、空氣品質、會員訂閱通知
- 每 15 分鐘自動更新（可暫停/恢復）

## 本地啟動

可用任一靜態伺服器啟動，例如：

```bash
python3 -m http.server 4173
```

啟動後開啟：`http://localhost:4173`

## GitHub 部署（GitHub Pages）

已配置 GitHub Actions：`.github/workflows/deploy-pages.yml`

- 觸發條件：推送到 `main`
- 部署目標：GitHub Pages
- 預期網址：`https://amjin358-svg.github.io/jin/`

## CCTV 資料更新

目前網站使用部署時快照資料：`data/freeway_cctv.json`，來源為：

- `https://thbapp.thb.gov.tw/services/cctv/freeway`

積淹水警示圖層資料：

- 測站快照：`data/flood_stations.json`
- 即時水深：`https://opendata.wra.gov.tw/api/v2/1b991bbb-ad85-4e7a-b931-06ce8749d3ed?format=JSON`

颱風分析資料：

- `https://www.cwa.gov.tw/V8/C/P/Typhoon/TY_NEWS.html`
- `https://www.cwa.gov.tw/V8/C/P/Typhoon/TY_WARN.html`
