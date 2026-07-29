# 停班停課+即時災害通報平台

這是一個純前端網站，提供：

- 台灣各縣市即時天氣資訊（溫度、濕度、風速、降雨量）
- 鄉鎮級天氣資訊（體感溫度、降雨機率、雲量、氣壓）
- 未來 12 小時降雨機率
- 降雨預測與 24 小時累積雨量估算
- 停班停課通知整合顯示（連結官方公告來源）
- 全台政府國道 CCTV 交流道監控清單（依所選縣市交流道近距排序）
- 高對比精簡地圖（積淹水／停電／CCTV 圖層）
- AI 災害提醒、颱風分析、地震通報、空氣品質、會員訂閱通知
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

### 訂閱通知（每日天氣預報 Email）

勾選「每日天氣預報（Email，每天一次）」並儲存訂閱後：

1. 系統會立即寄送**訂閱確認＋今日天氣預報**到訂閱者信箱  
2. 之後**每天一次**寄送該地區天氣預報  
3. 首次寄送到新信箱時，請先點選服務商（FormSubmit）的確認信，之後才會穩定收信
4. **關閉網站後仍可收到背景系統通知**（需允許通知權限；建議「加到主畫面／安裝 PWA」，Chrome 等瀏覽器會以背景定期檢查積淹水／天氣警戒）

伺服器端每日排程（即使用戶未開啟網站也會寄）：

- 工作流程：`.github/workflows/daily-weather-email.yml`（每天約台北時間 07:00）
- 訂閱名單資料庫：`data/subscribers.json`
- 手動登錄訂閱者：Actions → **Register weather subscriber**
- 訂閱名單每日備份：`.github/workflows/daily-subscriber-backup.yml`（每天約台北時間 07:10）
  - 腳本：`scripts/send-subscriber-backup-email.mjs`
  - 備份收件：`jin358@gmail.com`（完整 JSON＋名單摘要）
  - 可手動執行：Actions → **Daily subscriber database backup email**
- 可選強化寄信品質：於 Repo Secrets 設定 `RESEND_API_KEY`（以及可選 `MAIL_FROM`）
- 若使用 FormSubmit：請先對 `jin358@gmail.com` 完成一次啟動確認信

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

地震通報資料：

- 中央氣象署／測報中心台灣地區有感與顯著有感地震：`https://scweb.cwa.gov.tw/zh-tw/earthquake/data`
- 國家緊急訊息（PWS）通報頁：`https://scweb.cwa.gov.tw/zh-tw/earthquake/pws/{eventId}`
- 官方對照頁：`https://www.cwa.gov.tw/V8/C/E/index.html`
- 備援：USGS FDSN 台灣鄰近區域（僅在氣象署暫時無法連線時）
