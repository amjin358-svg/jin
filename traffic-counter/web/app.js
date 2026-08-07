"use strict";

const state = {
  data: null,
  cameras: [],
  activeDate: null, // 特定日期或 "ALL"
};

async function loadJSON(path) {
  const res = await fetch(path, { cache: "no-store" });
  if (!res.ok) throw new Error(`${path} 讀取失敗 (${res.status})`);
  return res.json();
}

function fmt(n) {
  return Number(n || 0).toLocaleString("zh-Hant");
}

function hourLabel(h) {
  return `${String(h).padStart(2, "0")}:00`;
}

/** 取得目前選取範圍的每小時陣列（合併多日則逐時相加）。 */
function currentHourly() {
  const { data, activeDate } = state;
  const dates = activeDate === "ALL" ? data.dates : [activeDate];
  const merged = Array.from({ length: 24 }, (_, h) => ({
    hour: h,
    total: 0,
    up: 0,
    down: 0,
  }));
  for (const d of dates) {
    (data.hourly[d] || []).forEach((row) => {
      merged[row.hour].total += row.total;
      merged[row.hour].up += row.up;
      merged[row.hour].down += row.down;
    });
  }
  return merged;
}

function renderCameraPill() {
  const pill = document.getElementById("cameraPill");
  pill.textContent = "攝影機：" + (state.data.camera_label || "示範資料集");
}

function renderDateTabs() {
  const tabs = document.getElementById("dateTabs");
  tabs.innerHTML = "";
  const options = [...state.data.dates];
  if (state.data.dates.length > 1) options.push("ALL");

  options.forEach((d) => {
    const btn = document.createElement("button");
    btn.className = "date-tab" + (d === state.activeDate ? " active" : "");
    btn.textContent = d === "ALL" ? "兩日合計" : d;
    btn.setAttribute("role", "tab");
    btn.onclick = () => {
      state.activeDate = d;
      renderAll();
    };
    tabs.appendChild(btn);
  });
  document.getElementById("generatedAt").textContent =
    "資料產生時間：" + (state.data.generated_at || "-");
}

function renderSummary() {
  const hourly = currentHourly();
  const total = hourly.reduce((s, r) => s + r.total, 0);
  const up = hourly.reduce((s, r) => s + r.up, 0);
  const down = hourly.reduce((s, r) => s + r.down, 0);
  const peak = hourly.reduce((m, r) => (r.total > m.total ? r : m), hourly[0]);
  const activeHours = hourly.filter((r) => r.total > 0).length;
  const avg = activeHours ? Math.round(total / activeHours) : 0;

  const cards = [
    { label: "車流量總計", value: fmt(total), unit: "輛" },
    {
      label: "尖峰時段",
      value: total ? hourLabel(peak.hour) : "—",
      unit: total ? `${fmt(peak.total)} 輛` : "",
    },
    { label: "有車時段平均", value: fmt(avg), unit: "輛/時" },
    { label: "方向A", value: fmt(up), unit: "輛" },
    { label: "方向B", value: fmt(down), unit: "輛" },
  ];

  const wrap = document.getElementById("summaryCards");
  wrap.innerHTML = "";
  cards.forEach((c) => {
    const el = document.createElement("dl");
    el.className = "metric";
    el.innerHTML = `<dt>${c.label}</dt><dd>${c.value}<span class="unit">${c.unit}</span></dd>`;
    wrap.appendChild(el);
  });
}

function renderChart() {
  const hourly = currentHourly();
  const max = Math.max(1, ...hourly.map((r) => r.total));
  const chart = document.getElementById("hourlyChart");
  chart.innerHTML = "";

  hourly.forEach((r) => {
    const col = document.createElement("div");
    col.className = "bar-col";
    const pct = (r.total / max) * 100;
    const aPct = r.total ? (r.up / r.total) * 100 : 0;
    const bPct = r.total ? (r.down / r.total) * 100 : 0;

    col.innerHTML = `
      ${r.total ? `<span class="val">${r.total}</span>` : ""}
      <div class="bar-stack" style="height:${pct}%" title="${hourLabel(
      r.hour
    )}｜總 ${r.total}（A ${r.up} / B ${r.down}）">
        <div class="bar-a" style="height:${aPct}%"></div>
        <div class="bar-b" style="height:${bPct}%"></div>
      </div>
      <span class="hr">${r.hour}</span>`;
    chart.appendChild(col);
  });
}

function renderTable() {
  const hourly = currentHourly();
  const tbody = document.querySelector("#hourlyTable tbody");
  tbody.innerHTML = "";
  let total = 0,
    up = 0,
    down = 0;

  hourly.forEach((r) => {
    total += r.total;
    up += r.up;
    down += r.down;
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${hourLabel(r.hour)}-${String(r.hour).padStart(
      2,
      "0"
    )}:59</td><td>${fmt(r.total)}</td><td>${fmt(r.up)}</td><td>${fmt(
      r.down
    )}</td>`;
    tbody.appendChild(tr);
  });

  const tr = document.createElement("tr");
  tr.className = "total-row";
  const label = state.activeDate === "ALL" ? "兩日總計" : "全日總計";
  tr.innerHTML = `<td>${label}</td><td>${fmt(total)}</td><td>${fmt(
    up
  )}</td><td>${fmt(down)}</td>`;
  tbody.appendChild(tr);
}

function renderCameras() {
  const list = document.getElementById("cameraList");
  list.innerHTML = "";
  state.cameras.slice(0, 6).forEach((c, i) => {
    const item = document.createElement("div");
    item.className = "camera-item";
    const dist =
      c.distance_km_from_baihe_zhongshan != null
        ? `距白河中山路約 ${c.distance_km_from_baihe_zhongshan} km`
        : "";
    item.innerHTML = `
      <div class="rank">${i + 1}</div>
      <div class="meta">
        <div class="loc">${c.location || c.Location || "—"}</div>
        <div class="dist">${dist}</div>
      </div>
      <a href="${c.url}" target="_blank" rel="noopener noreferrer">開啟影像 ↗</a>`;
    list.appendChild(item);
  });
}

function renderAll() {
  renderDateTabs();
  renderSummary();
  renderChart();
  renderTable();
  renderCameras();
}

async function init() {
  try {
    const [data, cameras] = await Promise.all([
      loadJSON("./data/traffic.json"),
      loadJSON("./data/cameras.json").catch(() => []),
    ]);
    state.data = data;
    state.cameras = Array.isArray(cameras) ? cameras : [];
    state.activeDate = data.dates[0];
    renderCameraPill();
    renderAll();
    document.getElementById("footer").textContent =
      "資料由路況車流量計數系統統計｜" + (data.camera_label || "示範資料集");
  } catch (err) {
    document.getElementById("generatedAt").textContent = "資料載入失敗：" + err.message;
  }
}

init();
