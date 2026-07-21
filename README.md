# 台灣即時氣象與停班停課資訊平台

這是一個純前端網站，提供：

- 台灣各縣市即時天氣資訊（溫度、濕度、風速、降雨量）
- 鄉鎮級天氣資訊（體感溫度、降雨機率、雲量、氣壓）
- 未來 12 小時降雨機率
- 降雨預測與 24 小時累積雨量估算
- 停班停課通知整合顯示（連結官方公告來源）
- 全台政府國道 CCTV 路口監控清單（近距排序、關鍵字篩選）
- 高對比精簡地圖（積淹水／停電／CCTV 圖層）
- AI 災害提醒、颱風分析、空氣品質、會員訂閱通知
- 自動更新（15／30／60 分鐘可選）

## 本地啟動

```bash
python3 -m http.server 4173
```

開啟：`http://localhost:4173`

## 公開網站（GitHub Pages）

程式碼已在公開倉庫：https://github.com/amjin358-svg/jin

預期公開網址：

**https://amjin358-svg.github.io/jin/**

### 一次性啟用（倉庫擁有者必做，約 30 秒）

目前 Actions 無法代替擁有者「第一次」開啟 Pages（權限限制）。請用擁有者帳號完成：

1. 開啟 [Pages 設定](https://github.com/amjin358-svg/jin/settings/pages)
2. **Build and deployment → Source** 選其中一種：
   - **最快**：`Deploy from a branch` → Branch 選 `main` → Folder `/ (root)` → Save  
   - 或：`GitHub Actions`（之後每次推 `main` 會自動部署）
3. 若選 GitHub Actions，請再到 [Actions 權限](https://github.com/amjin358-svg/jin/settings/actions)：
   - Workflow permissions → **Read and write permissions** → Save
4. 開啟 [Actions](https://github.com/amjin358-svg/jin/actions) 手動執行 **Deploy site to GitHub Pages**（或再推一次 `main`）
5. 約 1～2 分鐘後造訪：https://amjin358-svg.github.io/jin/

### 自動部署工作流程

已配置：`.github/workflows/deploy-pages.yml`

- 觸發：推送到 `main`，或手動 `workflow_dispatch`
- 部署目標：GitHub Pages

## CCTV 資料更新

目前網站使用部署時快照資料：`data/freeway_cctv.json`，來源為：

- `https://thbapp.thb.gov.tw/services/cctv/freeway`

積淹水警示圖層資料：

- 測站快照：`data/flood_stations.json`
- 即時水深：`https://opendata.wra.gov.tw/api/v2/1b991bbb-ad85-4e7a-b931-06ce8749d3ed?format=JSON`

颱風分析資料：

- `https://www.cwa.gov.tw/V8/C/P/Typhoon/TY_NEWS.html`
- `https://www.cwa.gov.tw/V8/C/P/Typhoon/TY_WARN.html`
