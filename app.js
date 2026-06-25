const CITY_LOCATIONS = [
  { name: "臺北市", lat: 25.033, lon: 121.5654 },
  { name: "新北市", lat: 25.012, lon: 121.4657 },
  { name: "基隆市", lat: 25.1276, lon: 121.7392 },
  { name: "桃園市", lat: 24.9936, lon: 121.301 },
  { name: "新竹市", lat: 24.8138, lon: 120.9675 },
  { name: "新竹縣", lat: 24.8387, lon: 121.0177 },
  { name: "苗栗縣", lat: 24.5602, lon: 120.8214 },
  { name: "臺中市", lat: 24.1477, lon: 120.6736 },
  { name: "彰化縣", lat: 24.0838, lon: 120.5384 },
  { name: "南投縣", lat: 23.9609, lon: 120.9719 },
  { name: "雲林縣", lat: 23.7092, lon: 120.4313 },
  { name: "嘉義市", lat: 23.4801, lon: 120.4491 },
  { name: "嘉義縣", lat: 23.4518, lon: 120.2555 },
  { name: "臺南市", lat: 22.9997, lon: 120.227 },
  { name: "高雄市", lat: 22.6273, lon: 120.3014 },
  { name: "屏東縣", lat: 22.5519, lon: 120.5488 },
  { name: "宜蘭縣", lat: 24.7021, lon: 121.7378 },
  { name: "花蓮縣", lat: 23.9872, lon: 121.6015 },
  { name: "臺東縣", lat: 22.7583, lon: 121.1444 },
  { name: "澎湖縣", lat: 23.5712, lon: 119.5793 },
  { name: "金門縣", lat: 24.4492, lon: 118.3765 },
  { name: "連江縣", lat: 26.1543, lon: 119.9517 }
];

const KNOWN_CITIES = new Set(CITY_LOCATIONS.map((city) => city.name));
const WEATHER_CODE_LABEL = {
  0: "晴朗",
  1: "大致晴",
  2: "局部多雲",
  3: "陰天",
  45: "有霧",
  48: "霧凇",
  51: "毛毛雨",
  53: "小雨",
  55: "中雨",
  56: "凍毛雨",
  57: "凍毛雨偏強",
  61: "小雨",
  63: "中雨",
  65: "大雨",
  66: "凍雨",
  67: "凍雨偏強",
  71: "小雪",
  73: "中雪",
  75: "大雪",
  77: "雪粒",
  80: "陣雨",
  81: "陣雨偏強",
  82: "強烈陣雨",
  85: "陣雪",
  86: "強烈陣雪",
  95: "雷雨",
  96: "雷雨伴冰雹",
  99: "強雷雨伴冰雹"
};

const citySelect = document.querySelector("#citySelect");
const refreshBtn = document.querySelector("#refreshBtn");
const lastUpdated = document.querySelector("#lastUpdated");
const weatherSummary = document.querySelector("#weatherSummary");
const tempValue = document.querySelector("#tempValue");
const humidityValue = document.querySelector("#humidityValue");
const windValue = document.querySelector("#windValue");
const rainValue = document.querySelector("#rainValue");
const rainTimeline = document.querySelector("#rainTimeline");
const closureMeta = document.querySelector("#closureMeta");
const closureList = document.querySelector("#closureList");

function initCitySelect() {
  CITY_LOCATIONS.forEach((city) => {
    const option = document.createElement("option");
    option.value = city.name;
    option.textContent = city.name;
    citySelect.append(option);
  });
  citySelect.value = "臺北市";
}

function formatDateTime(value) {
  return new Date(value).toLocaleString("zh-TW", {
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}

function renderRainTimeline(hours) {
  rainTimeline.innerHTML = "";
  if (!hours.length) {
    rainTimeline.textContent = "暫無預報資料";
    return;
  }

  hours.forEach((item) => {
    const row = document.createElement("div");
    row.className = "rain-row";
    row.innerHTML = `
      <span>${item.time}</span>
      <div class="bar-bg">
        <div class="bar" style="width:${Math.max(0, Math.min(item.probability, 100))}%"></div>
      </div>
      <strong>${item.probability}%</strong>
    `;
    rainTimeline.append(row);
  });
}

async function fetchWeather(cityName) {
  const city = CITY_LOCATIONS.find((item) => item.name === cityName);
  if (!city) {
    throw new Error("找不到指定縣市座標");
  }

  const endpoint = new URL("https://api.open-meteo.com/v1/forecast");
  endpoint.searchParams.set("latitude", city.lat.toString());
  endpoint.searchParams.set("longitude", city.lon.toString());
  endpoint.searchParams.set(
    "current",
    "temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m"
  );
  endpoint.searchParams.set("hourly", "precipitation_probability");
  endpoint.searchParams.set("timezone", "Asia/Taipei");
  endpoint.searchParams.set("forecast_days", "2");

  const response = await fetch(endpoint.toString());
  if (!response.ok) {
    throw new Error(`氣象資料讀取失敗：${response.status}`);
  }

  const payload = await response.json();
  const current = payload.current;
  const allHours = payload.hourly.time.map((time, index) => ({
    isoTime: time,
    time: new Date(time).toLocaleTimeString("zh-TW", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }),
    probability: Number(payload.hourly.precipitation_probability[index] ?? 0)
  }));
  const nowIndex = allHours.findIndex((row) => row.isoTime >= current.time);
  const startIndex = nowIndex === -1 ? 0 : nowIndex;
  const next12Hours = allHours.slice(startIndex, startIndex + 12);

  weatherSummary.textContent = `${cityName}・${WEATHER_CODE_LABEL[current.weather_code] ?? "天氣狀態更新中"}`;
  tempValue.textContent = `${Math.round(current.temperature_2m)}°C`;
  humidityValue.textContent = `${Math.round(current.relative_humidity_2m)}%`;
  windValue.textContent = `${Math.round(current.wind_speed_10m)} km/h`;
  rainValue.textContent = `${current.precipitation.toFixed(1)} mm`;
  renderRainTimeline(next12Hours);
}

function parseClosureMarkdown(markdownText) {
  const lines = markdownText.split("\n").map((line) => line.trim());
  const updateLine = lines.find((line) => line.startsWith("#### 更新時間：")) ?? "";
  const updateAt = updateLine.replace("#### 更新時間：", "").trim();

  const rows = [];
  lines.forEach((line) => {
    if (!line.startsWith("|")) {
      return;
    }
    if (line.includes("---") || line.includes("縣市名稱")) {
      return;
    }
    const raw = line.split("|").map((cell) => cell.trim()).filter(Boolean);
    if (raw.length < 2) {
      return;
    }
    const city = raw[0];
    const message = raw.slice(1).join(" ");
    if (!KNOWN_CITIES.has(city)) {
      return;
    }
    rows.push({ city, message });
  });

  return {
    updateAt,
    rows
  };
}

function saveClosureCache(data) {
  localStorage.setItem("closureCacheV1", JSON.stringify(data));
}

function readClosureCache() {
  const text = localStorage.getItem("closureCacheV1");
  if (!text) {
    return null;
  }
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function renderClosure(data, sourceLabel) {
  closureList.innerHTML = "";
  const sorted = [...data.rows].sort((a, b) => {
    const aStop = Number(a.message.includes("停止上班") || a.message.includes("停止上課"));
    const bStop = Number(b.message.includes("停止上班") || b.message.includes("停止上課"));
    return bStop - aStop;
  });

  if (!sorted.length) {
    closureList.innerHTML = `<p class="status-ok">目前未讀取到停班停課區域，請點擊「立即更新資料」重試。</p>`;
    return;
  }

  sorted.forEach((item) => {
    const entry = document.createElement("article");
    entry.className = "closure-item";
    const isStop = item.message.includes("停止上班") || item.message.includes("停止上課");
    const statusClass = isStop ? "status-warn" : "status-ok";
    entry.innerHTML = `
      <h3>${item.city}</h3>
      <p class="${statusClass}">${item.message}</p>
    `;
    closureList.append(entry);
  });

  closureMeta.textContent = `公告更新時間：${data.updateAt || "未提供"}（來源：${sourceLabel}）`;
}

async function fetchClosureNotices() {
  const endpoint = "https://r.jina.ai/http://www.dgpa.gov.tw/typh/daily/nds.html";
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`停班停課資料讀取失敗：${response.status}`);
    }
    const markdown = await response.text();
    const data = parseClosureMarkdown(markdown);
    if (!data.rows.length) {
      throw new Error("停班停課資料格式無法解析");
    }
    saveClosureCache(data);
    renderClosure(data, "行政院人事行政總處（公開鏡像）");
  } catch (error) {
    const cache = readClosureCache();
    if (cache) {
      renderClosure(cache, "本機快取");
      closureMeta.textContent += "（目前使用快取，請稍後重試）";
      return;
    }
    closureMeta.textContent = `停班停課資料暫時無法更新：${error.message}`;
    closureList.innerHTML = `
      <p class="status-warn">
        系統目前無法讀取公告，請改用
        <a href="https://www.dgpa.gov.tw/typh/daily/nds.html" target="_blank" rel="noopener noreferrer">官方頁面</a>
        查詢。
      </p>
    `;
  }
}

async function refreshAll() {
  refreshBtn.disabled = true;
  refreshBtn.textContent = "更新中...";

  try {
    await Promise.all([fetchWeather(citySelect.value), fetchClosureNotices()]);
    lastUpdated.textContent = `資料更新時間：${formatDateTime(Date.now())}`;
  } catch (error) {
    lastUpdated.textContent = `更新失敗：${error.message}`;
  } finally {
    refreshBtn.disabled = false;
    refreshBtn.textContent = "立即更新資料";
  }
}

citySelect.addEventListener("change", () => {
  fetchWeather(citySelect.value).catch((error) => {
    weatherSummary.textContent = `氣象資料更新失敗：${error.message}`;
  });
});

refreshBtn.addEventListener("click", () => {
  refreshAll();
});

initCitySelect();
refreshAll();
