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

const TOWNSHIP_LOCATIONS = [
  { city: "臺北市", town: "信義區", lat: 25.0335, lon: 121.5627 },
  { city: "臺北市", town: "北投區", lat: 25.1323, lon: 121.5015 },
  { city: "新北市", town: "板橋區", lat: 25.0119, lon: 121.4628 },
  { city: "新北市", town: "淡水區", lat: 25.1695, lon: 121.4441 },
  { city: "桃園市", town: "中壢區", lat: 24.9536, lon: 121.2258 },
  { city: "新竹市", town: "東區", lat: 24.8018, lon: 120.9716 },
  { city: "臺中市", town: "西屯區", lat: 24.1769, lon: 120.6399 },
  { city: "臺中市", town: "北屯區", lat: 24.1892, lon: 120.6863 },
  { city: "彰化縣", town: "彰化市", lat: 24.0685, lon: 120.5575 },
  { city: "南投縣", town: "南投市", lat: 23.908, lon: 120.6853 },
  { city: "雲林縣", town: "斗六市", lat: 23.7119, lon: 120.5442 },
  { city: "嘉義市", town: "東區", lat: 23.4786, lon: 120.4586 },
  { city: "臺南市", town: "安平區", lat: 22.9997, lon: 120.1615 },
  { city: "臺南市", town: "永康區", lat: 23.0265, lon: 120.2531 },
  { city: "高雄市", town: "前鎮區", lat: 22.5908, lon: 120.3076 },
  { city: "高雄市", town: "左營區", lat: 22.6876, lon: 120.2944 },
  { city: "屏東縣", town: "東港鎮", lat: 22.4653, lon: 120.4493 },
  { city: "宜蘭縣", town: "羅東鎮", lat: 24.6786, lon: 121.7669 },
  { city: "花蓮縣", town: "花蓮市", lat: 23.9877, lon: 121.6014 },
  { city: "臺東縣", town: "臺東市", lat: 22.7553, lon: 121.15 },
  { city: "澎湖縣", town: "馬公市", lat: 23.5662, lon: 119.5666 },
  { city: "金門縣", town: "金城鎮", lat: 24.4321, lon: 118.3186 }
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
const cameraMeta = document.querySelector("#cameraMeta");
const cameraList = document.querySelector("#cameraList");
const cameraKeyword = document.querySelector("#cameraKeyword");
const mapLayerList = document.querySelector("#mapLayerList");
const townshipSelect = document.querySelector("#townshipSelect");
const townshipSummary = document.querySelector("#townshipSummary");
const townshipFeelValue = document.querySelector("#townshipFeelValue");
const townshipRainProbValue = document.querySelector("#townshipRainProbValue");
const townshipCloudValue = document.querySelector("#townshipCloudValue");
const townshipPressureValue = document.querySelector("#townshipPressureValue");
const airSummary = document.querySelector("#airSummary");
const aqiValue = document.querySelector("#aqiValue");
const pm25Value = document.querySelector("#pm25Value");
const pm10Value = document.querySelector("#pm10Value");
const ozoneValue = document.querySelector("#ozoneValue");
const typhoonRiskBadge = document.querySelector("#typhoonRiskBadge");
const typhoonAnalysisList = document.querySelector("#typhoonAnalysisList");
const aiAlertList = document.querySelector("#aiAlertList");
const rainProjection = document.querySelector("#rainProjection");
const subscriptionForm = document.querySelector("#subscriptionForm");
const subscriberEmail = document.querySelector("#subscriberEmail");
const subscriptionStatus = document.querySelector("#subscriptionStatus");
const autoRefreshMeta = document.querySelector("#autoRefreshMeta");
const autoRefreshToggle = document.querySelector("#autoRefreshToggle");

let cameraDataset = null;
const DISABLED_CAMERA_HOSTS = new Set(["cctvs.freeway.gov.tw"]);
let warningMap = null;
let mapFloodLayer = null;
let mapCameraLayer = null;
let mapCityFocusLayer = null;
const mapLayerOrder = ["flood-warning", "cctv-points", "city-focus"];
const mapLayerVisibility = {
  "flood-warning": true,
  "cctv-points": true,
  "city-focus": true
};
const mapLayerConfig = {
  "flood-warning": { label: "即時積淹水感測", pane: "floodPane" },
  "cctv-points": { label: "CCTV 監控點", pane: "cameraPane" },
  "city-focus": { label: "縣市焦點圈", pane: "focusPane" }
};
const AUTO_REFRESH_MS = 15 * 60 * 1000;
const SUBSCRIPTION_STORAGE_KEY = "weatherMemberSubscriptionV1";
const FLOOD_LATEST_API =
  "https://opendata.wra.gov.tw/api/v2/1b991bbb-ad85-4e7a-b931-06ce8749d3ed?format=JSON";
const TYPHOON_NEWS_MIRROR = "https://r.jina.ai/https://www.cwa.gov.tw/V8/C/P/Typhoon/TY_NEWS.html";
const TYPHOON_WARN_MIRROR = "https://r.jina.ai/https://www.cwa.gov.tw/V8/C/P/Typhoon/TY_WARN.html";
const appState = {
  weather: null,
  airQuality: null,
  closureRows: [],
  floodStations: [],
  floodLivePoints: [],
  floodFeatures: [],
  floodMetaText: "",
  typhoon: null,
  typhoonOfficial: null,
  aiAlerts: [],
  autoRefreshEnabled: true,
  nextAutoRefreshAt: Date.now() + AUTO_REFRESH_MS,
  subscription: null,
  lastNotifiedAt: 0
};
let autoRefreshTimer = null;
let countdownTimer = null;

function initCitySelect() {
  CITY_LOCATIONS.forEach((city) => {
    const option = document.createElement("option");
    option.value = city.name;
    option.textContent = city.name;
    citySelect.append(option);
  });
  citySelect.value = "臺北市";
}

function initTownshipSelect() {
  townshipSelect.innerHTML = "";
  TOWNSHIP_LOCATIONS.forEach((item, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `${item.city}・${item.town}`;
    townshipSelect.append(option);
  });
  setTownshipByCity(citySelect.value);
}

function setTownshipByCity(cityName) {
  const matchIndex = TOWNSHIP_LOCATIONS.findIndex((item) => item.city === cityName);
  if (matchIndex >= 0) {
    townshipSelect.value = String(matchIndex);
  }
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

function toRadians(value) {
  return (value * Math.PI) / 180;
}

function getDistanceKm(lat1, lon1, lat2, lon2) {
  const earthRadiusKm = 6371;
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadiusKm * c;
}

function findNearestTimeIndex(times, nowIso) {
  const index = times.findIndex((time) => time >= nowIso);
  return index === -1 ? Math.max(times.length - 1, 0) : index;
}

function getAqiLabel(aqi) {
  if (aqi <= 50) return "良好";
  if (aqi <= 100) return "普通";
  if (aqi <= 150) return "對敏感族群不健康";
  if (aqi <= 200) return "不健康";
  return "非常不健康";
}

function getFilteredSortedCameras() {
  if (!cameraDataset || !Array.isArray(cameraDataset.cameras)) {
    return [];
  }
  const city = CITY_LOCATIONS.find((item) => item.name === citySelect.value);
  const keyword = cameraKeyword.value.trim().toLowerCase();
  const normalize = (text) => text.toLowerCase().replaceAll("臺", "台");

  return cameraDataset.cameras
    .filter((camera) => {
      try {
        const host = new URL(camera.html).hostname;
        return !DISABLED_CAMERA_HOSTS.has(host);
      } catch {
        return false;
      }
    })
    .filter((camera) => {
      if (!keyword) {
        return true;
      }
      const haystack = normalize(`${camera.id ?? ""} ${camera.stakenumber ?? ""}`);
      return haystack.includes(normalize(keyword));
    })
    .map((camera) => ({
      ...camera,
      distanceKm: city ? getDistanceKm(city.lat, city.lon, Number(camera.gisy), Number(camera.gisx)) : Infinity
    }))
    .sort((a, b) => a.distanceKm - b.distanceKm);
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
    "temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,wind_gusts_10m,pressure_msl,apparent_temperature,cloud_cover"
  );
  endpoint.searchParams.set("hourly", "precipitation_probability,precipitation");
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
    probability: Number(payload.hourly.precipitation_probability[index] ?? 0),
    precipitation: Number(payload.hourly.precipitation[index] ?? 0)
  }));
  const nowIndex = allHours.findIndex((row) => row.isoTime >= current.time);
  const startIndex = nowIndex === -1 ? 0 : nowIndex;
  const next12Hours = allHours.slice(startIndex, startIndex + 12);
  const next24Hours = allHours.slice(startIndex, startIndex + 24);
  const rain24 = next24Hours.reduce((sum, item) => sum + item.precipitation, 0);

  weatherSummary.textContent = `${cityName}・${WEATHER_CODE_LABEL[current.weather_code] ?? "天氣狀態更新中"}`;
  tempValue.textContent = `${Math.round(current.temperature_2m)}°C`;
  humidityValue.textContent = `${Math.round(current.relative_humidity_2m)}%`;
  windValue.textContent = `${Math.round(current.wind_speed_10m)} km/h`;
  rainValue.textContent = `${current.precipitation.toFixed(1)} mm`;
  rainProjection.textContent = `未來 24 小時累積降雨預估：${rain24.toFixed(1)} mm`;
  renderRainTimeline(next12Hours);

  appState.weather = {
    cityName,
    current,
    next12Hours,
    next24Hours,
    rain24
  };
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

  appState.closureRows = sorted;
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
      appState.closureRows = cache.rows;
      return;
    }
    closureMeta.textContent = `停班停課資料暫時無法更新：${error.message}`;
    appState.closureRows = [];
    closureList.innerHTML = `
      <p class="status-warn">
        系統目前無法讀取公告，請改用
        <a href="https://www.dgpa.gov.tw/typh/daily/nds.html" target="_blank" rel="noopener noreferrer">官方頁面</a>
        查詢。
      </p>
    `;
  }
}

async function fetchTownshipWeather() {
  const selectedIndex = Number(townshipSelect.value);
  const target = TOWNSHIP_LOCATIONS[selectedIndex];
  if (!target) {
    townshipSummary.textContent = "找不到鄉鎮資料";
    return;
  }

  const endpoint = new URL("https://api.open-meteo.com/v1/forecast");
  endpoint.searchParams.set("latitude", String(target.lat));
  endpoint.searchParams.set("longitude", String(target.lon));
  endpoint.searchParams.set(
    "current",
    "temperature_2m,apparent_temperature,pressure_msl,cloud_cover,weather_code"
  );
  endpoint.searchParams.set("hourly", "precipitation_probability");
  endpoint.searchParams.set("timezone", "Asia/Taipei");
  endpoint.searchParams.set("forecast_days", "2");

  const response = await fetch(endpoint.toString());
  if (!response.ok) {
    throw new Error(`鄉鎮資料讀取失敗：${response.status}`);
  }
  const payload = await response.json();
  const index = findNearestTimeIndex(payload.hourly.time, payload.current.time);
  const rainProb = Number(payload.hourly.precipitation_probability[index] ?? 0);

  townshipSummary.textContent = `${target.city}${target.town}・${WEATHER_CODE_LABEL[payload.current.weather_code] ?? "天氣更新中"}`;
  townshipFeelValue.textContent = `${Math.round(payload.current.apparent_temperature)}°C`;
  townshipRainProbValue.textContent = `${Math.round(rainProb)}%`;
  townshipCloudValue.textContent = `${Math.round(payload.current.cloud_cover)}%`;
  townshipPressureValue.textContent = `${Math.round(payload.current.pressure_msl)} hPa`;
}

async function fetchAirQuality(cityName) {
  const city = CITY_LOCATIONS.find((item) => item.name === cityName);
  if (!city) {
    throw new Error("找不到空品縣市座標");
  }
  const endpoint = new URL("https://air-quality-api.open-meteo.com/v1/air-quality");
  endpoint.searchParams.set("latitude", String(city.lat));
  endpoint.searchParams.set("longitude", String(city.lon));
  endpoint.searchParams.set("hourly", "us_aqi,pm2_5,pm10,ozone");
  endpoint.searchParams.set("timezone", "Asia/Taipei");
  endpoint.searchParams.set("forecast_days", "2");

  const response = await fetch(endpoint.toString());
  if (!response.ok) {
    throw new Error(`空氣品質讀取失敗：${response.status}`);
  }
  const payload = await response.json();
  const nowIso = appState.weather?.current?.time ?? payload.hourly.time[0];
  const index = findNearestTimeIndex(payload.hourly.time, nowIso);
  const aqi = Number(payload.hourly.us_aqi[index] ?? 0);
  const pm25 = Number(payload.hourly.pm2_5[index] ?? 0);
  const pm10 = Number(payload.hourly.pm10[index] ?? 0);
  const ozone = Number(payload.hourly.ozone[index] ?? 0);

  airSummary.textContent = `${cityName}・${getAqiLabel(aqi)}`;
  aqiValue.textContent = `${Math.round(aqi)}`;
  pm25Value.textContent = `${pm25.toFixed(1)} μg/m³`;
  pm10Value.textContent = `${pm10.toFixed(1)} μg/m³`;
  ozoneValue.textContent = `${ozone.toFixed(1)} μg/m³`;

  appState.airQuality = {
    cityName,
    aqi,
    pm25,
    pm10,
    ozone
  };
}

function getFloodLevelByDepth(depthCm) {
  if (depthCm >= 50) return 4;
  if (depthCm >= 30) return 3;
  if (depthCm >= 15) return 2;
  return 1;
}

function parseTyphoonOfficialText(newsMarkdown, warnMarkdown) {
  const hasWarning = !/目前無發布颱風警報/.test(warnMarkdown || "");
  const countMatch = (newsMarkdown || "").match(/有\s*(\d+)\s*個颱風/);
  const typhoonCount = countMatch ? Number(countMatch[1]) : 0;
  const nameMatch = (newsMarkdown || "").match(/(強烈颱風|中度颱風|輕度颱風)\s+([^\s]+)\s+編號第\s*(\d+)\s*號\s+國際命名\s+([A-Z]+)/);
  const detailMatch = (newsMarkdown || "").match(
    /中心位置在北緯\s*([0-9.]+)\s*度，東經\s*([0-9.]+)\s*度.*?中心氣壓\s*([0-9]+)\s*百帕，近中心最大風速每秒\s*([0-9]+)\s*公尺，瞬間最大陣風每秒\s*([0-9]+)\s*公尺/
  );

  const messages = [];
  if (nameMatch) {
    messages.push(`${nameMatch[1]} ${nameMatch[2]}（第 ${nameMatch[3]} 號 / ${nameMatch[4]}）`);
  } else if (typhoonCount > 0) {
    messages.push(`太平洋地區目前有 ${typhoonCount} 個颱風活動。`);
  } else {
    messages.push("目前中央氣象署颱風消息未顯示活躍颱風。");
  }

  if (detailMatch) {
    messages.push(
      `中心位置：北緯 ${detailMatch[1]}°、東經 ${detailMatch[2]}°；中心氣壓 ${detailMatch[3]} hPa。`
    );
    messages.push(
      `近中心最大風速 ${detailMatch[4]} m/s，瞬間最大陣風 ${detailMatch[5]} m/s。`
    );
  }

  messages.push(hasWarning ? "官方狀態：已發布颱風警報，請提高警戒。" : "官方狀態：目前無發布颱風警報。");
  messages.push("資料來源：中央氣象署颱風消息／颱風警報頁面。");

  return {
    hasWarning,
    typhoonCount,
    name: nameMatch ? `${nameMatch[1]} ${nameMatch[2]}` : null,
    pressure: detailMatch ? Number(detailMatch[3]) : null,
    maxWindMs: detailMatch ? Number(detailMatch[4]) : null,
    gustMs: detailMatch ? Number(detailMatch[5]) : null,
    messages
  };
}

function calculateTyphoonRisk() {
  const weather = appState.weather;
  const official = appState.typhoonOfficial;
  if (!weather && !official) {
    return null;
  }

  const wind = Number(weather?.current?.wind_speed_10m ?? 0);
  const gust = Number(weather?.current?.wind_gusts_10m ?? wind);
  const pressure = Number(weather?.current?.pressure_msl ?? 1015);
  const rainProbAvg = weather
    ? weather.next12Hours.reduce((sum, item) => sum + item.probability, 0) / Math.max(weather.next12Hours.length, 1)
    : 0;
  const rain24 = Number(weather?.rain24 ?? 0);

  let score = 0;
  score += Math.min(wind * 1.2, 30);
  score += Math.min(gust * 0.7, 25);
  score += Math.max(0, 1012 - pressure) * 1.6;
  score += Math.min(rainProbAvg * 0.25, 18);
  score += Math.min(rain24 * 0.45, 20);

  if (official?.hasWarning) {
    score += 35;
  }
  if ((official?.typhoonCount ?? 0) > 0) {
    score += 18;
  }
  if (official?.maxWindMs) {
    score += Math.min(official.maxWindMs * 0.55, 28);
  }
  if (official?.pressure && official.pressure < 970) {
    score += 12;
  }

  score = Math.round(Math.min(score, 100));
  const level = score >= 70 ? "高" : score >= 40 ? "中" : "低";
  const messages = [
    ...(official?.messages ?? []),
    `本地觀測：風速 ${wind.toFixed(1)} km/h，陣風 ${gust.toFixed(1)} km/h，氣壓 ${Math.round(pressure)} hPa。`,
    `本地降雨：12 小時平均降雨機率 ${Math.round(rainProbAvg)}%，24 小時雨量預估 ${rain24.toFixed(1)} mm。`
  ];
  return { level, score, messages, hasWarning: Boolean(official?.hasWarning) };
}

function renderTyphoonAnalysis() {
  const result = calculateTyphoonRisk();
  if (!result) {
    typhoonRiskBadge.textContent = "風險等級：資料不足";
    typhoonRiskBadge.className = "risk-badge risk-low";
    typhoonAnalysisList.innerHTML = "<li>等待氣象資料。</li>";
    return;
  }
  appState.typhoon = result;
  const className = result.level === "高" ? "risk-high" : result.level === "中" ? "risk-medium" : "risk-low";
  typhoonRiskBadge.className = `risk-badge ${className}`;
  typhoonRiskBadge.textContent = `風險等級：${result.level}（指數 ${result.score}/100）`;
  typhoonAnalysisList.innerHTML = "";
  result.messages.forEach((message) => {
    const item = document.createElement("li");
    item.textContent = message;
    typhoonAnalysisList.append(item);
  });
}

function getNearbyFloodWarnings() {
  const city = CITY_LOCATIONS.find((item) => item.name === citySelect.value);
  if (!city || !appState.floodLivePoints.length) {
    return [];
  }
  return appState.floodLivePoints
    .map((point) => ({
      areaName: `${point.county}${point.town} ${point.name}`,
      level: point.level,
      waterDepthCm: point.depthCm,
      updatedAt: point.updatedAt,
      distanceKm: getDistanceKm(city.lat, city.lon, point.lat, point.lon)
    }))
    .filter((row) => row.distanceKm <= 80)
    .sort((a, b) => b.level - a.level || a.distanceKm - b.distanceKm);
}

function renderAiAlerts() {
  const alerts = [];
  const typhoon = appState.typhoon;
  const air = appState.airQuality;
  const cityClosure = appState.closureRows.find((row) => row.city === citySelect.value);
  const nearbyFlood = getNearbyFloodWarnings();

  if (typhoon) {
    if (typhoon.hasWarning || typhoon.level === "高") {
      alerts.push(`【高風險】颱風風險指數 ${typhoon.score}，建議預先備妥防災物資並避免非必要外出。`);
    } else if (typhoon.level === "中") {
      alerts.push(`【注意】颱風風險指數 ${typhoon.score}，請關注地方政府後續警戒資訊。`);
    } else {
      alerts.push("【一般】目前風險偏低，仍建議維持基本防災準備。");
    }
  }

  if (air && air.aqi > 100) {
    alerts.push(`【空品提醒】目前 AQI ${Math.round(air.aqi)}，敏感族群請減少戶外活動。`);
  }

  if (nearbyFlood.length > 0) {
    const top = nearbyFlood[0];
    alerts.push(
      `【積淹水警示】${top.areaName} 距離約 ${top.distanceKm.toFixed(1)} km，水深 ${top.waterDepthCm} cm（等級 ${top.level}）。`
    );
  } else if (appState.floodMetaText) {
    alerts.push(`【積淹水監測】${appState.floodMetaText}`);
  }

  if (cityClosure && cityClosure.message.includes("停止上班")) {
    alerts.push(`【停班停課】${cityClosure.city} 最新公告：${cityClosure.message}`);
  }

  if (!alerts.length) {
    alerts.push("目前未觸發重大災害提醒。");
  }
  appState.aiAlerts = alerts;
  aiAlertList.innerHTML = "";
  alerts.forEach((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    aiAlertList.append(item);
  });
}

function loadSubscription() {
  try {
    const raw = localStorage.getItem(SUBSCRIPTION_STORAGE_KEY);
    if (!raw) {
      return;
    }
    appState.subscription = JSON.parse(raw);
    if (appState.subscription?.email) {
      subscriberEmail.value = appState.subscription.email;
    }
    const topics = new Set(appState.subscription?.topics ?? []);
    subscriptionForm.querySelectorAll("input[name='topic']").forEach((checkbox) => {
      checkbox.checked = topics.has(checkbox.value);
    });
  } catch {
    appState.subscription = null;
  }
}

function renderSubscriptionStatus(message) {
  if (message) {
    subscriptionStatus.textContent = message;
    return;
  }
  if (!appState.subscription?.email) {
    subscriptionStatus.textContent = "尚未設定訂閱。";
    return;
  }
  subscriptionStatus.textContent = `已訂閱 ${appState.subscription.email}（主題：${appState.subscription.topics.join("、")}）`;
}

async function maybeNotifySubscribers(triggerSource) {
  if (triggerSource !== "auto" || !appState.subscription?.email) {
    return;
  }
  const important = appState.aiAlerts.find(
    (text) => text.includes("高風險") || text.includes("積淹水警示") || text.includes("停班停課")
  );
  if (!important) {
    return;
  }
  if (Date.now() - appState.lastNotifiedAt < AUTO_REFRESH_MS - 5000) {
    return;
  }
  if ("Notification" in window) {
    if (Notification.permission === "default") {
      await Notification.requestPermission();
    }
    if (Notification.permission === "granted") {
      new Notification("台灣災害提醒", { body: important });
      appState.lastNotifiedAt = Date.now();
      renderSubscriptionStatus(`已送出通知：${important}`);
    }
  }
}

function renderCameraList() {
  cameraList.innerHTML = "";

  if (!cameraDataset || !Array.isArray(cameraDataset.cameras)) {
    cameraList.innerHTML = `<p class="status-warn">目前無法載入政府路口監控資料。</p>`;
    return;
  }

  const rows = getFilteredSortedCameras().slice(0, 12);

  if (!rows.length) {
    cameraList.innerHTML = `<p class="status-warn">查無符合條件的監控點位，請更換關鍵字。</p>`;
    return;
  }

  rows.forEach((camera) => {
    const card = document.createElement("article");
    card.className = "camera-item";
    const streamUrl = camera.html;
    const safeStake = camera.stakenumber || "未提供里程資訊";
    const distance = Number.isFinite(camera.distanceKm) ? `${camera.distanceKm.toFixed(1)} km` : "--";

    card.innerHTML = `
      <img src="${streamUrl}" alt="${camera.id} 即時影像" loading="lazy" />
      <div class="camera-body">
        <h3>${camera.id}</h3>
        <p>${safeStake}</p>
        <p>距離所選縣市中心：約 ${distance}</p>
        <a href="${streamUrl}" target="_blank" rel="noopener noreferrer">開啟官方即時影像</a>
      </div>
    `;
    const img = card.querySelector("img");
    img?.addEventListener("error", () => {
      img.alt = `${camera.id} 影像暫時無法顯示`;
      img.src =
        "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='360'%3E%3Crect width='100%25' height='100%25' fill='%23e7ecf7'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='%235a6787' text-anchor='middle' dominant-baseline='middle'%3E%E5%BD%B1%E5%83%8F%E6%9A%AB%E6%99%82%E7%84%A1%E6%B3%95%E8%BC%89%E5%85%A5%3C/text%3E%3C/svg%3E";
    });
    cameraList.append(card);
  });
}

function getMapLayerInstance(layerKey) {
  if (layerKey === "flood-warning") {
    return mapFloodLayer;
  }
  if (layerKey === "cctv-points") {
    return mapCameraLayer;
  }
  if (layerKey === "city-focus") {
    return mapCityFocusLayer;
  }
  return null;
}

function applyMapLayerOrder() {
  if (!warningMap) {
    return;
  }
  let zIndex = 660;
  mapLayerOrder.forEach((layerKey) => {
    const paneName = mapLayerConfig[layerKey]?.pane;
    if (!paneName) {
      return;
    }
    const pane = warningMap.getPane(paneName);
    if (pane) {
      pane.style.zIndex = String(zIndex);
      zIndex -= 20;
    }
  });
}

function syncMapLayerVisibility(layerKey) {
  if (!warningMap) {
    return;
  }
  const layer = getMapLayerInstance(layerKey);
  if (!layer) {
    return;
  }
  const shouldShow = Boolean(mapLayerVisibility[layerKey]);
  const hasLayer = warningMap.hasLayer(layer);
  if (shouldShow && !hasLayer) {
    layer.addTo(warningMap);
  }
  if (!shouldShow && hasLayer) {
    warningMap.removeLayer(layer);
  }
}

function updateMapLayerOrderFromDom() {
  if (!mapLayerList) {
    return;
  }
  const orderedKeys = [...mapLayerList.querySelectorAll(".layer-item")].map((item) => item.dataset.layerKey);
  mapLayerOrder.splice(0, mapLayerOrder.length, ...orderedKeys);
  applyMapLayerOrder();
}

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll(".layer-item:not(.dragging)")];
  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      }
      return closest;
    },
    { offset: Number.NEGATIVE_INFINITY, element: null }
  ).element;
}

function renderLayerControl() {
  if (!mapLayerList) {
    return;
  }
  mapLayerList.innerHTML = "";
  mapLayerOrder.forEach((layerKey) => {
    const item = document.createElement("li");
    item.className = "layer-item";
    item.dataset.layerKey = layerKey;
    item.draggable = true;
    item.innerHTML = `
      <span class="layer-handle">☰</span>
      <label>${mapLayerConfig[layerKey].label}</label>
      <input type="checkbox" ${mapLayerVisibility[layerKey] ? "checked" : ""} aria-label="${mapLayerConfig[layerKey].label}" />
    `;

    item.addEventListener("dragstart", () => {
      item.classList.add("dragging");
    });
    item.addEventListener("dragend", () => {
      item.classList.remove("dragging");
      updateMapLayerOrderFromDom();
    });

    const checkbox = item.querySelector("input");
    checkbox?.addEventListener("change", (event) => {
      mapLayerVisibility[layerKey] = Boolean(event.target.checked);
      syncMapLayerVisibility(layerKey);
    });
    mapLayerList.append(item);
  });

  mapLayerList.addEventListener("dragover", (event) => {
    event.preventDefault();
    const dragging = mapLayerList.querySelector(".dragging");
    if (!dragging) {
      return;
    }
    const afterElement = getDragAfterElement(mapLayerList, event.clientY);
    if (afterElement == null) {
      mapLayerList.appendChild(dragging);
      return;
    }
    mapLayerList.insertBefore(dragging, afterElement);
  });
}

function buildFloodPointStyle(depthCm) {
  const level = getFloodLevelByDepth(depthCm);
  if (level >= 4) {
    return { color: "#790000", fillColor: "#d00000", fillOpacity: 0.85, radius: 9, weight: 2 };
  }
  if (level === 3) {
    return { color: "#8a1c00", fillColor: "#e85d04", fillOpacity: 0.8, radius: 8, weight: 2 };
  }
  if (level === 2) {
    return { color: "#9c5800", fillColor: "#ffba08", fillOpacity: 0.78, radius: 7, weight: 2 };
  }
  return { color: "#616161", fillColor: "#ffd166", fillOpacity: 0.72, radius: 6, weight: 1 };
}

function updateFloodMapLayer() {
  if (!warningMap) {
    return;
  }
  if (mapFloodLayer && warningMap.hasLayer(mapFloodLayer)) {
    warningMap.removeLayer(mapFloodLayer);
  }
  mapFloodLayer = L.layerGroup();

  const points = appState.floodLivePoints.length
    ? appState.floodLivePoints
    : [];

  if (!points.length && appState.floodStations.length) {
    // Keep a light fallback sample of stations when all depths are zero,
    // so the layer remains inspectable.
    appState.floodStations.slice(0, 40).forEach((station) => {
      const marker = L.circleMarker([station.lat, station.lon], {
        pane: "floodPane",
        ...buildFloodPointStyle(0)
      });
      marker.bindPopup(
        `
          <strong>${station.name}</strong><br/>
          ${station.county}${station.town}<br/>
          目前水深：0 cm<br/>
          來源：水利署 IoW 即時感測
        `
      );
      mapFloodLayer.addLayer(marker);
    });
  } else {
    points.forEach((point) => {
      const marker = L.circleMarker([point.lat, point.lon], {
        pane: "floodPane",
        ...buildFloodPointStyle(point.depthCm)
      });
      marker.bindPopup(
        `
          <strong>${point.name}</strong><br/>
          ${point.county}${point.town}<br/>
          警示等級：${point.level}<br/>
          即時水深：${point.depthCm} cm<br/>
          更新時間：${point.updatedAt || "-"}<br/>
          來源：水利署 IoW 即時感測
        `
      );
      mapFloodLayer.addLayer(marker);
    });
  }

  syncMapLayerVisibility("flood-warning");
  updateFloodLayerMetaText();
}

function updateFloodLayerMetaText() {
  const floodedCount = appState.floodLivePoints.length;
  const stationCount = appState.floodStations.length;
  appState.floodMetaText =
    floodedCount > 0
      ? `即時積水感測點 ${floodedCount} 處（測站總數 ${stationCount}）。`
      : `目前全台 IoW 測站未回報積水（測站總數 ${stationCount}）。`;

  const note = document.querySelector(".layer-panel .timestamp");
  if (note) {
    note.textContent = `${appState.floodMetaText} 顏色越深代表水深越高。`;
  }
}

async function loadFloodStations() {
  const response = await fetch("./data/flood_stations.json");
  if (!response.ok) {
    throw new Error(`淹水測站資料讀取失敗：${response.status}`);
  }
  const payload = await response.json();
  appState.floodStations = payload.stations ?? [];
}

async function fetchLiveFloodData() {
  if (!appState.floodStations.length) {
    await loadFloodStations();
  }
  const response = await fetch(FLOOD_LATEST_API);
  if (!response.ok) {
    throw new Error(`即時淹水資料讀取失敗：${response.status}`);
  }
  const latestRows = await response.json();
  const stationMap = new Map(appState.floodStations.map((station) => [station.sensorid, station]));
  const livePoints = [];
  const freshnessLimitMs = 36 * 60 * 60 * 1000;
  const nowMs = Date.now();

  latestRows.forEach((row) => {
    const depthCm = Number(row.latestvalue ?? 0);
    if (!(depthCm > 0) || depthCm >= 500) {
      return;
    }
    const updatedMs = Date.parse(row.timestamp || "");
    if (Number.isFinite(updatedMs) && nowMs - updatedMs > freshnessLimitMs) {
      return;
    }
    const station = stationMap.get(row.sensorid);
    if (!station) {
      return;
    }
    livePoints.push({
      sensorid: row.sensorid,
      name: station.name,
      county: station.county,
      town: station.town,
      lat: station.lat,
      lon: station.lon,
      depthCm,
      level: getFloodLevelByDepth(depthCm),
      updatedAt: row.timestamp
    });
  });

  appState.floodLivePoints = livePoints.sort((a, b) => b.depthCm - a.depthCm);
  appState.floodFeatures = livePoints.map((point) => ({
    type: "Feature",
    properties: {
      areaName: `${point.county}${point.town} ${point.name}`,
      level: point.level,
      waterDepthCm: point.depthCm,
      updatedAt: point.updatedAt,
      note: "水利署 IoW 即時感測"
    },
    geometry: {
      type: "Point",
      coordinates: [point.lon, point.lat]
    }
  }));
  updateFloodMapLayer();
}

async function fetchTyphoonOfficial() {
  const [newsResponse, warnResponse] = await Promise.all([
    fetch(TYPHOON_NEWS_MIRROR),
    fetch(TYPHOON_WARN_MIRROR)
  ]);
  if (!newsResponse.ok || !warnResponse.ok) {
    throw new Error("中央氣象署颱風資料讀取失敗");
  }
  const newsMarkdown = await newsResponse.text();
  const warnMarkdown = await warnResponse.text();
  appState.typhoonOfficial = parseTyphoonOfficialText(newsMarkdown, warnMarkdown);
}

function updateCityFocusLayer() {
  if (!warningMap) {
    return;
  }
  const city = CITY_LOCATIONS.find((item) => item.name === citySelect.value);
  if (mapCityFocusLayer && warningMap.hasLayer(mapCityFocusLayer)) {
    warningMap.removeLayer(mapCityFocusLayer);
  }
  if (!city) {
    return;
  }
  mapCityFocusLayer = L.circle([city.lat, city.lon], {
    pane: "focusPane",
    radius: 15000,
    color: "#00b4d8",
    weight: 2,
    fillColor: "#00b4d8",
    fillOpacity: 0.09
  }).bindTooltip(`${city.name} 焦點區`);
  syncMapLayerVisibility("city-focus");
}

function updateCameraMapLayer() {
  if (!warningMap) {
    return;
  }
  if (!mapCameraLayer) {
    mapCameraLayer = L.layerGroup();
  }
  mapCameraLayer.clearLayers();
  getFilteredSortedCameras()
    .slice(0, 220)
    .forEach((camera) => {
      if (!Number.isFinite(Number(camera.gisy)) || !Number.isFinite(Number(camera.gisx))) {
        return;
      }
      const marker = L.circleMarker([Number(camera.gisy), Number(camera.gisx)], {
        pane: "cameraPane",
        radius: 4,
        color: "#66d9ff",
        fillColor: "#0096c7",
        fillOpacity: 0.7,
        weight: 1
      });
      marker.bindPopup(
        `
          <strong>${camera.id}</strong><br/>
          ${camera.stakenumber ?? "未提供里程資訊"}<br/>
          距離所選縣市：約 ${camera.distanceKm.toFixed(1)} km<br/>
          <a href="${camera.html}" target="_blank" rel="noopener noreferrer">開啟官方即時影像</a>
        `
      );
      mapCameraLayer.addLayer(marker);
    });
  syncMapLayerVisibility("cctv-points");
}

function updateMapForCityChange() {
  if (!warningMap) {
    return;
  }
  const city = CITY_LOCATIONS.find((item) => item.name === citySelect.value);
  if (city) {
    warningMap.setView([city.lat, city.lon], 9, { animate: true });
  }
  updateCityFocusLayer();
  updateCameraMapLayer();
}

function initWarningMap() {
  if (typeof L === "undefined") {
    if (mapLayerList) {
      mapLayerList.innerHTML = `<li class="status-warn">地圖套件載入失敗，請檢查網路連線後重試。</li>`;
    }
    return;
  }
  warningMap = L.map("warningMap", {
    zoomControl: true,
    attributionControl: true
  }).setView([23.7, 120.96], 7);

  warningMap.createPane("floodPane");
  warningMap.createPane("cameraPane");
  warningMap.createPane("focusPane");

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    className: "high-contrast-tiles",
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(warningMap);

  renderLayerControl();
  applyMapLayerOrder();
  loadFloodStations()
    .then(() => fetchLiveFloodData())
    .then(() => renderAiAlerts())
    .catch((error) => {
      if (mapLayerList) {
        const warn = document.createElement("p");
        warn.className = "status-warn";
        warn.textContent = `積淹水即時圖層載入失敗：${error.message}`;
        mapLayerList.append(warn);
      }
    });
  updateCityFocusLayer();
  updateCameraMapLayer();
}

async function fetchRoadCameras() {
  try {
    const response = await fetch("./data/freeway_cctv.json");
    if (!response.ok) {
      throw new Error(`監控資料讀取失敗：${response.status}`);
    }
    cameraDataset = await response.json();
    const fetchedAtText = cameraDataset.fetchedAt ? formatDateTime(cameraDataset.fetchedAt) : "未提供";
    const availableCount = Array.isArray(cameraDataset.cameras)
      ? cameraDataset.cameras.filter((camera) => {
          try {
            return !DISABLED_CAMERA_HOSTS.has(new URL(camera.html).hostname);
          } catch {
            return false;
          }
        }).length
      : 0;
    cameraMeta.textContent = `資料來源：交通部公路局（國道 CCTV）｜鏡頭數：${cameraDataset.count ?? 0}（可預覽 ${availableCount}）｜快照時間：${fetchedAtText}`;
    renderCameraList();
    updateCameraMapLayer();
  } catch (error) {
    cameraMeta.textContent = `監控資料暫時無法更新：${error.message}`;
    cameraList.innerHTML = `<p class="status-warn">請稍後重試或改用來源網址查詢。</p>`;
  }
}

function setRefreshButtonLoading(isLoading) {
  refreshBtn.disabled = isLoading;
  refreshBtn.textContent = isLoading ? "更新中..." : "立即更新資料";
}

function scheduleNextAutoRefresh() {
  appState.nextAutoRefreshAt = Date.now() + AUTO_REFRESH_MS;
}

function updateAutoRefreshMeta() {
  if (!appState.autoRefreshEnabled) {
    autoRefreshMeta.textContent = "每 15 分鐘自動更新：已暫停";
    autoRefreshToggle.textContent = "恢復自動更新";
    return;
  }
  const diff = Math.max(0, appState.nextAutoRefreshAt - Date.now());
  const minutes = Math.floor(diff / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  autoRefreshMeta.textContent = `每 15 分鐘自動更新：啟用中（${minutes}:${String(seconds).padStart(2, "0")} 後）`;
  autoRefreshToggle.textContent = "暫停自動更新";
}

function startAutoRefreshTimers() {
  scheduleNextAutoRefresh();
  if (autoRefreshTimer) {
    clearInterval(autoRefreshTimer);
  }
  if (countdownTimer) {
    clearInterval(countdownTimer);
  }
  autoRefreshTimer = setInterval(() => {
    if (!appState.autoRefreshEnabled) {
      return;
    }
    performFullRefresh("auto");
  }, AUTO_REFRESH_MS);
  countdownTimer = setInterval(() => {
    updateAutoRefreshMeta();
  }, 1000);
  updateAutoRefreshMeta();
}

async function performFullRefresh(triggerSource) {
  if (triggerSource === "manual") {
    setRefreshButtonLoading(true);
  }
  try {
    await Promise.all([
      fetchWeather(citySelect.value),
      fetchClosureNotices(),
      fetchTownshipWeather(),
      fetchAirQuality(citySelect.value),
      fetchTyphoonOfficial().catch(() => {
        appState.typhoonOfficial = null;
      }),
      fetchLiveFloodData().catch((error) => {
        appState.floodMetaText = `即時淹水資料暫時無法更新：${error.message}`;
      })
    ]);
    renderTyphoonAnalysis();
    renderAiAlerts();
    updateMapForCityChange();
    await maybeNotifySubscribers(triggerSource);
    lastUpdated.textContent = `資料更新時間：${formatDateTime(Date.now())}${triggerSource === "auto" ? "（自動）" : ""}`;
    if (appState.autoRefreshEnabled) {
      scheduleNextAutoRefresh();
    }
  } catch (error) {
    lastUpdated.textContent = `更新失敗：${error.message}`;
  } finally {
    if (triggerSource === "manual") {
      setRefreshButtonLoading(false);
    }
  }
}

citySelect.addEventListener("change", () => {
  setTownshipByCity(citySelect.value);
  performFullRefresh("manual");
  renderCameraList();
  updateMapForCityChange();
});

refreshBtn.addEventListener("click", () => {
  performFullRefresh("manual");
});

cameraKeyword.addEventListener("input", () => {
  renderCameraList();
  updateCameraMapLayer();
});

townshipSelect.addEventListener("change", () => {
  fetchTownshipWeather().catch((error) => {
    townshipSummary.textContent = `鄉鎮資料更新失敗：${error.message}`;
  });
});

subscriptionForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const topics = [...subscriptionForm.querySelectorAll("input[name='topic']:checked")].map((item) => item.value);
  appState.subscription = {
    email: subscriberEmail.value.trim(),
    topics
  };
  localStorage.setItem(SUBSCRIPTION_STORAGE_KEY, JSON.stringify(appState.subscription));
  if ("Notification" in window && Notification.permission === "default") {
    await Notification.requestPermission();
  }
  renderSubscriptionStatus("訂閱設定已儲存，將於每次自動更新推送警示。");
});

autoRefreshToggle.addEventListener("click", () => {
  appState.autoRefreshEnabled = !appState.autoRefreshEnabled;
  if (appState.autoRefreshEnabled) {
    scheduleNextAutoRefresh();
  }
  updateAutoRefreshMeta();
});

initCitySelect();
initTownshipSelect();
loadSubscription();
renderSubscriptionStatus();
performFullRefresh("manual");
fetchRoadCameras();
initWarningMap();
startAutoRefreshTimers();
