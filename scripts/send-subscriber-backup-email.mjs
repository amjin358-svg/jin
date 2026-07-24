#!/usr/bin/env node
/**
 * Daily backup of subscriber database (data/subscribers.json)
 * emailed to the owner inbox for archival.
 *
 * Delivery order:
 * 1) Resend API when RESEND_API_KEY is set
 * 2) FormSubmit.co AJAX fallback (recipient must activate once)
 */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SUBSCRIBERS_PATH = path.join(ROOT, "data", "subscribers.json");
const SITE_URL = "https://amjin358-svg.github.io/jin/";
const BACKUP_TO = process.env.SUBSCRIBER_BACKUP_TO || "jin358@gmail.com";
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

function taipeiDateTime(date = new Date()) {
  return new Intl.DateTimeFormat("zh-TW", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).format(date);
}

function normalizeRecord(entry) {
  if (!entry || typeof entry !== "object") {
    return null;
  }
  const email = String(entry.email || "")
    .trim()
    .toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return null;
  }
  return {
    email,
    topics: Array.isArray(entry.topics) ? entry.topics.map(String) : [],
    city: String(entry.city || "").trim(),
    township: String(entry.township || "").trim(),
    lat: Number(entry.lat),
    lon: Number(entry.lon),
    updatedAt: entry.updatedAt || null
  };
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
      platform: SITE_URL,
      backupType: "subscribers-database"
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

function buildBackupBody(payload, records) {
  const dateKey = taipeiDateKey();
  const listLines = records.length
    ? records
        .map((row, index) => {
          const area = [row.city, row.township].filter(Boolean).join("") || "未填地區";
          const topics = row.topics.length ? row.topics.join(",") : "-";
          return `${index + 1}. ${row.email}｜${area}｜主題:${topics}`;
        })
        .join("\n")
    : "（目前無訂閱者）";

  const database = {
    updatedAt: payload.updatedAt || null,
    backedUpAt: new Date().toISOString(),
    count: records.length,
    subscribers: records
  };

  return [
    "【訂閱者資料庫每日備份】",
    `備份日期：${dateKey}（台北時間 ${taipeiDateTime()}）`,
    `收件備份信箱：${BACKUP_TO}`,
    `訂閱筆數：${records.length}`,
    `平台：${SITE_URL}`,
    `資料來源：data/subscribers.json`,
    "",
    "—— 訂閱名單摘要 ——",
    listLines,
    "",
    "—— 完整資料庫 JSON ——",
    JSON.stringify(database, null, 2),
    "",
    "本信為系統自動每日備份，請妥善保存。"
  ].join("\n");
}

async function main() {
  const raw = await readFile(SUBSCRIBERS_PATH, "utf8");
  const payload = JSON.parse(raw);
  const list = Array.isArray(payload.subscribers) ? payload.subscribers : [];
  const records = list.map(normalizeRecord).filter(Boolean);

  const dateKey = taipeiDateKey();
  const subject = `【訂閱名單備份】${dateKey}｜${records.length} 筆`;
  const body = buildBackupBody(payload, records);
  const result = await sendEmail(BACKUP_TO, subject, body);

  console.log(
    `Subscriber backup emailed to ${BACKUP_TO}: count=${records.length} via ${result.provider}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
