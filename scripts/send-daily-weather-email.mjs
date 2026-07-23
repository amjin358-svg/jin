#!/usr/bin/env node
/**
 * Daily weather forecast email sender for GitHub Actions.
 * Sends one forecast email per subscriber who opted into the "weather" topic.
 *
 * Delivery order:
 * 1) Resend API when RESEND_API_KEY is set
 * 2) FormSubmit.co AJAX fallback (no API key; recipient must activate once)
 */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SUBSCRIBERS_PATH = path.join(ROOT, "data", "subscribers.json");
const SITE_URL = "https://amjin358-svg.github.io/jin/";
const FROM_EMAIL = process.env.MAIL_FROM || "停班停課通報 <onboarding@resend.dev>";
const RESEND_API_KEY = process.env.RESEND_API_KEY || "";

function taipeiDateKey(date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(date);
}

function weatherCodeLabel(code) {
  const map = {
    0: "晴朗",
    1: "大致晴朗",
    2: "多雲",
    3: "陰天",
    45: "有霧",
    48: "沉積霜霧",
    51: "毛毛雨",
    53: "毛毛雨",
    55: "毛毛雨",
    61: "小雨",
    63: "中雨",
    65: "大雨",
    71: "小雪",
    73: "中雪",
    75: "大雪",
    80: "陣雨",
    81: "陣雨",
    82: "強陣雨",
    95: "雷雨",
    96: "雷雨伴冰雹",
    99: "雷雨伴冰雹"
  };
  return map[Number(code)] || "天氣更新中";
}

async function fetchForecast(lat, lon) {
  const endpoint = new URL("https://api.open-meteo.com/v1/forecast");
  endpoint.searchParams.set("latitude", String(lat));
  endpoint.searchParams.set("longitude", String(lon));
  endpoint.searchParams.set(
    "current",
    "temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,apparent_temperature,cloud_cover"
  );
  endpoint.searchParams.set("hourly", "precipitation_probability,precipitation");
  endpoint.searchParams.set("timezone", "Asia/Taipei");
  endpoint.searchParams.set("forecast_days", "2");
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error(`Open-Meteo HTTP ${response.status}`);
  }
  return response.json();
}

function buildWeatherBody(subscriber, payload) {
  const label = [subscriber.city, subscriber.township].filter(Boolean).join("") || "訂閱地區";
  const current = payload.current || {};
  const hours = payload.hourly?.time || [];
  const probs = payload.hourly?.precipitation_probability || [];
  const precip = payload.hourly?.precipitation || [];
  const nowIndex = Math.max(
    0,
    hours.findIndex((time) => time >= (current.time || ""))
  );
  const next8 = hours.slice(nowIndex, nowIndex + 8).map((time, index) => {
    const i = nowIndex + index;
    return {
      time: String(time).slice(11, 16),
      probability: Number(probs[i] ?? 0),
      precipitation: Number(precip[i] ?? 0)
    };
  });
  const rain8 = next8.reduce((sum, row) => sum + row.precipitation, 0);
  const rainProb = Number(probs[nowIndex] ?? 0);
  const rainLines = next8
    .map((row) => `${row.time} 降雨機率 ${Math.round(row.probability)}%`)
    .join("\n");

  return [
    `【每日天氣預報】${label}`,
    `日期：${taipeiDateKey()}（台北時間）`,
    `天氣：${weatherCodeLabel(current.weather_code)}`,
    `氣溫：${Math.round(Number(current.temperature_2m) || 0)}°C（體感 ${Math.round(Number(current.apparent_temperature) || 0)}°C）`,
    `濕度：${Math.round(Number(current.relative_humidity_2m) || 0)}%`,
    `風速：${Math.round(Number(current.wind_speed_10m) || 0)} km/h`,
    `雲量：${Math.round(Number(current.cloud_cover) || 0)}%`,
    `目前降雨機率：${Math.round(rainProb)}%`,
    `未來 8 小時累積降雨預估：${rain8.toFixed(1)} mm`,
    "",
    "未來 8 小時降雨機率：",
    rainLines || "（暫無預報資料）",
    "",
    `平台：${SITE_URL}`,
    "本信為每日一次天氣預報，如需取消請於網站取消訂閱主題或清除訂閱。"
  ].join("\n");
}

async function sendWithResend(toEmail, subject, text) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [toEmail],
      subject,
      text
    })
  });
  const raw = await response.text();
  if (!response.ok) {
    throw new Error(`Resend HTTP ${response.status}: ${raw.slice(0, 240)}`);
  }
  return { provider: "resend", raw };
}

async function sendWithFormSubmit(toEmail, subject, text) {
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(toEmail)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      _subject: subject,
      _template: "box",
      _captcha: "false",
      _honey: "",
      message: text,
      platform: SITE_URL
    })
  });
  const raw = await response.text();
  if (!response.ok) {
    throw new Error(`FormSubmit HTTP ${response.status}: ${raw.slice(0, 240)}`);
  }
  return { provider: "formsubmit", raw };
}

async function sendEmail(toEmail, subject, text) {
  if (RESEND_API_KEY) {
    return sendWithResend(toEmail, subject, text);
  }
  return sendWithFormSubmit(toEmail, subject, text);
}

function normalizeSubscriber(entry) {
  if (!entry || typeof entry !== "object") {
    return null;
  }
  const email = String(entry.email || "")
    .trim()
    .toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return null;
  }
  const topics = Array.isArray(entry.topics) ? entry.topics.map(String) : [];
  if (!topics.includes("weather")) {
    return null;
  }
  const lat = Number(entry.lat);
  const lon = Number(entry.lon);
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
    return null;
  }
  return {
    email,
    topics,
    city: String(entry.city || "").trim(),
    township: String(entry.township || "").trim(),
    lat,
    lon
  };
}

async function main() {
  const raw = await readFile(SUBSCRIBERS_PATH, "utf8");
  const payload = JSON.parse(raw);
  const list = Array.isArray(payload.subscribers) ? payload.subscribers : [];
  const subscribers = list.map(normalizeSubscriber).filter(Boolean);

  if (!subscribers.length) {
    console.log("No weather subscribers found; nothing to send.");
    return;
  }

  console.log(`Sending daily weather email to ${subscribers.length} subscriber(s).`);
  const dateKey = taipeiDateKey();
  let sent = 0;
  let failed = 0;

  for (const subscriber of subscribers) {
    try {
      const forecast = await fetchForecast(subscriber.lat, subscriber.lon);
      const body = buildWeatherBody(subscriber, forecast);
      const label = [subscriber.city, subscriber.township].filter(Boolean).join("") || "訂閱地區";
      const subject = `【每日天氣預報】${label}｜${dateKey}`;
      const result = await sendEmail(subscriber.email, subject, body);
      sent += 1;
      console.log(`OK ${subscriber.email} via ${result.provider}`);
    } catch (error) {
      failed += 1;
      console.error(`FAIL ${subscriber.email}: ${error.message}`);
    }
  }

  console.log(`Done. sent=${sent} failed=${failed} provider=${RESEND_API_KEY ? "resend" : "formsubmit"}`);
  if (failed > 0 && sent === 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
