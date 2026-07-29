const SW_VERSION = "jin-v28-locate-before-notify";
const PREFS_DB = "jin-bg-prefs-v1";
const PREFS_STORE = "prefs";
const PREFS_KEY = "subscription";
const LAST_DIGEST_KEY = "lastDigest";
const FLOOD_LATEST_API =
  "https://opendata.wra.gov.tw/api/v2/1b991bbb-ad85-4e7a-b931-06ce8749d3ed?format=JSON";
const FLOOD_SAFE_DEPTH_CM = 5;
const FLOOD_RADIUS_KM = 20;
const EARTHQUAKE_CWA_LIST_MIRROR =
  "https://r.jina.ai/https://scweb.cwa.gov.tw/zh-tw/earthquake/data";
const EARTHQUAKE_NATIONAL_INTENSITY = 4;
const EARTHQUAKE_RECENT_MS = 168 * 60 * 60 * 1000;

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientsArr) => {
      for (const client of clientsArr) {
        if ("focus" in client) {
          return client.focus();
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow("./");
      }
      return undefined;
    })
  );
});

function openPrefsDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(PREFS_DB, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(PREFS_STORE)) {
        db.createObjectStore(PREFS_STORE);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("IndexedDB open failed"));
  });
}

async function idbGet(key) {
  const db = await openPrefsDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(PREFS_STORE, "readonly");
    const store = tx.objectStore(PREFS_STORE);
    const req = store.get(key);
    req.onsuccess = () => resolve(req.result ?? null);
    req.onerror = () => reject(req.error || new Error("IndexedDB get failed"));
  });
}

async function idbSet(key, value) {
  const db = await openPrefsDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(PREFS_STORE, "readwrite");
    const store = tx.objectStore(PREFS_STORE);
    const req = store.put(value, key);
    req.onsuccess = () => resolve(true);
    req.onerror = () => reject(req.error || new Error("IndexedDB put failed"));
  });
}

function getDistanceKm(lat1, lon1, lat2, lon2) {
  const toRad = (deg) => (deg * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function getFloodLevel(depthCm) {
  if (depthCm >= 50) return 4;
  if (depthCm >= 30) return 3;
  if (depthCm >= 15) return 2;
  return 1;
}

async function buildBackgroundAlertMessages(prefs) {
  const messages = [];
  const topics = new Set(prefs?.topics || []);
  const lat = Number(prefs?.lat);
  const lon = Number(prefs?.lon);
  const label = prefs?.label || `${prefs?.city || ""}${prefs?.township || ""}` || "訂閱地區";

  if (topics.has("flood") && Number.isFinite(lat) && Number.isFinite(lon)) {
    try {
      const [stationsResponse, latestResponse] = await Promise.all([
        fetch("./data/flood_stations.json", { cache: "no-store" }),
        fetch(FLOOD_LATEST_API, { cache: "no-store" })
      ]);
      if (stationsResponse.ok && latestResponse.ok) {
        const stationsPayload = await stationsResponse.json();
        const latestRows = await latestResponse.json();
        const stationMap = new Map(
          (stationsPayload.stations || []).map((station) => [station.sensorid, station])
        );
        const warnings = (Array.isArray(latestRows) ? latestRows : [])
          .map((row) => {
            const depthCm = Number(row.latestvalue ?? 0);
            if (!(depthCm > 0) || depthCm < FLOOD_SAFE_DEPTH_CM || depthCm >= 500) {
              return null;
            }
            const station = stationMap.get(row.sensorid);
            if (!station) {
              return null;
            }
            const rowLat = Number(station.lat);
            const rowLon = Number(station.lon);
            if (!Number.isFinite(rowLat) || !Number.isFinite(rowLon)) {
              return null;
            }
            const distanceKm = getDistanceKm(lat, lon, rowLat, rowLon);
            if (distanceKm > FLOOD_RADIUS_KM) {
              return null;
            }
            return {
              depthCm,
              distanceKm,
              level: getFloodLevel(depthCm),
              name: formatFloodStationLabel(station)
            };
          })
          .filter(Boolean)
          .sort((a, b) => b.level - a.level || a.distanceKm - b.distanceKm);
        if (warnings.length) {
          const top = warnings[0];
          messages.push(
            `【積淹水警示】${top.name} 距離約 ${top.distanceKm.toFixed(1)} km，水深 ${top.depthCm} cm（等級 ${top.level}）。`
          );
        }
      }
    } catch {
      /* ignore network errors in background */
    }
  }

  if (topics.has("weather") && Number.isFinite(lat) && Number.isFinite(lon)) {
    try {
      const endpoint = new URL("https://api.open-meteo.com/v1/forecast");
      endpoint.searchParams.set("latitude", String(lat));
      endpoint.searchParams.set("longitude", String(lon));
      endpoint.searchParams.set("current", "temperature_2m,precipitation,weather_code");
      endpoint.searchParams.set("hourly", "precipitation_probability");
      endpoint.searchParams.set("timezone", "Asia/Taipei");
      endpoint.searchParams.set("forecast_days", "1");
      const response = await fetch(endpoint.toString(), { cache: "no-store" });
      if (response.ok) {
        const payload = await response.json();
        const current = payload.current || {};
        const rainProb = Number(payload.hourly?.precipitation_probability?.[0] ?? 0);
        if (Number(current.precipitation) >= 2 || rainProb >= 70) {
          messages.push(
            `【天氣提醒】${label} 目前 ${Math.round(Number(current.temperature_2m) || 0)}°C，降雨機率 ${Math.round(rainProb)}%，請留意短時降雨。`
          );
        }
      }
    } catch {
      /* ignore */
    }
  }

  if (topics.has("earthquake")) {
    try {
      const response = await fetch(EARTHQUAKE_CWA_LIST_MIRROR, { cache: "no-store" });
      if (response.ok) {
        const markdown = await response.text();
        const now = Date.now();
        const rows = [];
        markdown.split(/\r?\n/).forEach((line) => {
          if (!line.includes("/earthquake/details/") || !line.includes("規模：")) {
            return;
          }
          const metaMatch = line.match(
            /([0-9]{4}-[0-9]{2}-[0-9]{2}\s+[0-9]{2}:[0-9]{2}:[0-9]{2})\s*規模：([0-9.]+)\s*深度：([0-9.]+)\s*\[([^\]]+)\]/
          );
          const intensityMatch = line.match(
            /\|\s*(?:[0-9]{2,3}|!\[[^\]]*\]\([^)]*\))\s*\|\s*([0-9]+(?:\s*[弱強])?)\s*級\s*\|/
          );
          if (!metaMatch) {
            return;
          }
          const timeMs = Date.parse(`${metaMatch[1].replace(" ", "T")}+08:00`);
          const magnitude = Number(metaMatch[2]);
          const intensityText = String(intensityMatch?.[1] || "").replace(/\s+/g, "");
          let intensityValue = Number(intensityText.replace(/[弱強]/g, ""));
          if (intensityText.includes("5強")) intensityValue = 5.5;
          if (intensityText.includes("6強")) intensityValue = 6.5;
          if (intensityText.includes("5弱")) intensityValue = 5;
          if (intensityText.includes("6弱")) intensityValue = 6;
          if (!Number.isFinite(timeMs) || now - timeMs > EARTHQUAKE_RECENT_MS) {
            return;
          }
          if (!(intensityValue >= EARTHQUAKE_NATIONAL_INTENSITY || (magnitude >= 5.5 && intensityValue >= 4))) {
            return;
          }
          rows.push({
            magnitude,
            intensityText: intensityText || "--",
            place: metaMatch[4],
            timeMs
          });
        });
        rows.sort((a, b) => b.timeMs - a.timeMs);
        if (rows.length) {
          const top = rows[0];
          const when = new Date(top.timeMs).toLocaleString("zh-TW", { hour12: false });
          messages.push(
            `【國家緊急訊息／地震通報｜中央氣象署】規模 ${top.magnitude.toFixed(1)}、最大震度 ${top.intensityText}級，${top.place}（${when}）。請就近掩護並留意餘震。`
          );
        }
      }
    } catch {
      /* ignore network errors in background */
    }
  }

  return messages;
}

function formatFloodStationLabel(station = {}) {
  const name = String(station.name || "")
    .replace(/&#40;/g, "(")
    .replace(/&#41;/g, ")");
  const numberMatch = name.match(/編號\s*([0-9]+)/);
  if (numberMatch) {
    return `編號${numberMatch[1]}`;
  }
  return name || `${station.county || ""}${station.town || ""}` || "感測點";
}

async function showSystemNotification(title, body, tag) {
  await self.registration.showNotification(title || "預報訂閱通知", {
    body: body || "",
    tag: tag || `jin-bg-${Date.now()}`,
    renotify: true,
    requireInteraction: true,
    vibrate: [180, 90, 180, 90, 180],
    icon: "./icons/icon-192.svg",
    badge: "./icons/icon-192.svg",
    data: { source: "background" }
  });
}

async function runBackgroundSubscriptionCheck() {
  const prefs = await idbGet(PREFS_KEY);
  if (!prefs?.email || !Array.isArray(prefs.topics) || !prefs.topics.length) {
    return { checked: false, reason: "no-prefs" };
  }
  if (!prefs.notifyArmedByLocate) {
    return { checked: true, notified: false, reason: "locate-required" };
  }
  const messages = await buildBackgroundAlertMessages(prefs);
  if (!messages.length) {
    return { checked: true, notified: false };
  }
  const digest = messages.join("\n");
  const previous = await idbGet(LAST_DIGEST_KEY);
  if (previous === digest) {
    return { checked: true, notified: false, reason: "unchanged" };
  }
  await showSystemNotification("災害訂閱背景通知", digest, `jin-bg-${Date.now()}`);
  await idbSet(LAST_DIGEST_KEY, digest);
  return { checked: true, notified: true };
}

self.addEventListener("message", (event) => {
  const data = event.data || {};
  if (data.type === "SAVE_SUBSCRIPTION_PREFS") {
    event.waitUntil(idbSet(PREFS_KEY, data.payload || null));
    return;
  }
  if (data.type === "CLEAR_SUBSCRIPTION_PREFS") {
    event.waitUntil(idbSet(PREFS_KEY, null));
    return;
  }
  if (data.type === "RUN_BACKGROUND_CHECK") {
    event.waitUntil(runBackgroundSubscriptionCheck());
    return;
  }
  if (data.type !== "SHOW_NOTIFICATION") {
    return;
  }
  event.waitUntil(
    self.registration.showNotification(data.title || "預報訂閱通知", {
      body: data.body || "",
      tag: data.tag || `jin-${Date.now()}`,
      renotify: true,
      requireInteraction: true,
      vibrate: [180, 90, 180, 90, 180],
      icon: "./icons/icon-192.svg",
      badge: "./icons/icon-192.svg",
      data: data.data || {}
    })
  );
});

self.addEventListener("periodicsync", (event) => {
  if (event.tag === "jin-disaster-check") {
    event.waitUntil(runBackgroundSubscriptionCheck());
  }
});

self.addEventListener("sync", (event) => {
  if (event.tag === "jin-disaster-check-once") {
    event.waitUntil(runBackgroundSubscriptionCheck());
  }
});

self.addEventListener("push", (event) => {
  let payload = {};
  try {
    payload = event.data ? event.data.json() : {};
  } catch {
    payload = { body: event.data?.text?.() || "您有新的訂閱通知" };
  }
  event.waitUntil(
    showSystemNotification(
      payload.title || "預報訂閱通知",
      payload.body || "您有新的訂閱背景通知，請開啟平台查看。",
      payload.tag || `jin-push-${Date.now()}`
    )
  );
});
