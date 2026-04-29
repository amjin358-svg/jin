const I18N_STORAGE_KEY = "gv_lang";

const I18N_DICT = {
  HOME: { en: "HOME", zh: "首頁" },
  "ABOUT US": { en: "ABOUT US", zh: "關於我們" },
  SERVICES: { en: "SERVICES", zh: "服務項目" },
  "REAL ESTATE": { en: "REAL ESTATE", zh: "房地產" },
  NEWS: { en: "NEWS", zh: "最新消息" },
  CONTACT: { en: "CONTACT", zh: "聯絡我們" },
  "GET IN TOUCH": { en: "GET IN TOUCH", zh: "立即聯繫" },
  "Connecting Opportunities.": { en: "Connecting Opportunities.", zh: "連結機會。" },
  "Building Futures.": { en: "Building Futures.", zh: "共築未來。" },
  "We connect global markets and resources to drive sustainable growth and create meaningful impact.": {
    en: "We connect global markets and resources to drive sustainable growth and create meaningful impact.",
    zh: "我們串聯全球市場與資源，推動永續成長並創造深遠影響。"
  },
  "LEARN MORE": { en: "LEARN MORE", zh: "瞭解更多" },
  "MLS 地圖": { en: "MLS MAP", zh: "MLS 地圖" },
  "INVESTMENT MANAGEMENT": { en: "INVESTMENT MANAGEMENT", zh: "投資管理" },
  "Delivering long-term value through strategic investments.": { en: "Delivering long-term value through strategic investments.", zh: "透過策略投資創造長期價值。" },
  "REAL ESTATE DEVELOPMENT": { en: "REAL ESTATE DEVELOPMENT", zh: "房地產開發" },
  "Building sustainable communities and iconic real estate.": { en: "Building sustainable communities and iconic real estate.", zh: "打造永續社區與指標型不動產。" },
  "GLOBAL TRADE SOLUTIONS": { en: "GLOBAL TRADE SOLUTIONS", zh: "全球貿易解決方案" },
  "Connecting markets and unlocking international opportunities.": { en: "Connecting markets and unlocking international opportunities.", zh: "連結市場並開拓國際機會。" },
  "PARTNERSHIP & STRATEGY": { en: "PARTNERSHIP & STRATEGY", zh: "合作與策略" },
  "Collaborating for growth and shared success.": { en: "Collaborating for growth and shared success.", zh: "以協作驅動成長與共享成功。" },
  "ABOUT GLOBE VISTA GROUP": { en: "ABOUT GLOBE VISTA GROUP", zh: "關於 GLOBE VISTA GROUP" },
  "LEARN MORE ABOUT US": { en: "LEARN MORE ABOUT US", zh: "更多關於我們" },
  "Years of Experience": { en: "Years of Experience", zh: "年資經驗" },
  "Market Presence": { en: "Market Presence", zh: "市場佈局" },
  "Strategic Partners": { en: "Strategic Partners", zh: "策略夥伴" },
  "Future Focused": { en: "Future Focused", zh: "聚焦未來" },
  "Featured Projects": { en: "Featured Projects", zh: "旗艦專案精選" },
  "旗艦專案精選": { en: "Featured Projects", zh: "旗艦專案精選" },
  "Projected Value: $1.2B": { en: "Projected Value: $1.2B", zh: "預估價值：$1.2B" },
  "Coverage: 14 Core Cities": { en: "Coverage: 14 Core Cities", zh: "覆蓋範圍：14 個核心城市" },
  "AUM: $780M": { en: "AUM: $780M", zh: "管理資產：$780M" },
  "L.A. MLS LISTING HUB": { en: "L.A. MLS LISTING HUB", zh: "洛杉磯 MLS 房源中心" },
  "Search Los Angeles listings, browse eight featured properties, and click map markers to view each total asking price.": {
    en: "Search Los Angeles listings, browse eight featured properties, and click map markers to view each total asking price.",
    zh: "搜尋洛杉磯房源、瀏覽 8 筆精選物件，並可點擊地圖標記查看每戶總價。"
  },
  "Map data shown for demonstration and brokerage presentation use.": { en: "Map data shown for demonstration and brokerage presentation use.", zh: "地圖資料僅供展示與仲介簡報使用。" },
  "搜尋 L.A. 物件": { en: "Search L.A. Listings", zh: "搜尋 L.A. 物件" },
  "© 2026 Globe Vista Group. All Rights Reserved.": { en: "© 2026 Globe Vista Group. All Rights Reserved.", zh: "© 2026 Globe Vista Group. 版權所有。" }
};

const I18N_PLACEHOLDERS = {
  "輸入地區、社區或關鍵字（例如 Beverly Hills）": {
    en: "Type district, community, or keyword (e.g. Beverly Hills)",
    zh: "輸入地區、社區或關鍵字（例如 Beverly Hills）"
  },
  "Type district, community, or keyword (e.g. Beverly Hills)": {
    en: "Type district, community, or keyword (e.g. Beverly Hills)",
    zh: "輸入地區、社區或關鍵字（例如 Beverly Hills）"
  }
};

const UI_I18N = {
  totalPrice: { en: "Total Price", zh: "總價" },
  beds: { en: "Beds", zh: "房" },
  baths: { en: "Baths", zh: "衛" },
  districtLabel: { en: "District", zh: "地區" },
  layoutLabel: { en: "Layout", zh: "格局" },
  areaLabel: { en: "Area", zh: "面積" },
  yearLabel: { en: "Year", zh: "年份" },
  parkingLabel: { en: "Parking", zh: "車位" },
  communityLabel: { en: "Community", zh: "社區" },
  viewOnMap: { en: "View on Map", zh: "在地圖查看" },
  viewDetails: { en: "View Details", zh: "查看詳情" },
  detailsTitle: { en: "Property Details", zh: "物件詳情" },
  closeDetails: { en: "Close", zh: "關閉" },
  propertyIdLabel: { en: "Property ID", zh: "物件編號" },
  statusLabel: { en: "Status", zh: "銷售狀態" },
  statusActive: { en: "Active", zh: "銷售中" },
  estMortgageLabel: { en: "Est. Mortgage", zh: "估算月付" },
  pricePerSqft: { en: "Price / Sqft", zh: "每呎單價" },
  agentLabel: { en: "Listing Agent", zh: "專屬經紀人" },
  contactAgent: { en: "Contact Agent", zh: "聯絡經紀人" },
  askTour: { en: "Request Tour", zh: "預約看房" }
};

const originalTextMap = new WeakMap();
const getLang = () => {
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get("lang");
  if (urlLang === "en" || urlLang === "zh") {
    localStorage.setItem(I18N_STORAGE_KEY, urlLang);
    return urlLang;
  }
  return localStorage.getItem(I18N_STORAGE_KEY) || "en";
};

const translateTextNode = (node, lang) => {
  if (!originalTextMap.has(node)) {
    originalTextMap.set(node, node.nodeValue);
  }
  const raw = originalTextMap.get(node);
  const trimmed = raw.trim();
  if (!trimmed) return;
  const record = I18N_DICT[trimmed];
  if (record && record[lang]) {
    node.nodeValue = raw.replace(trimmed, record[lang]);
  }
};

const applyPageTranslation = (lang) => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (node.parentElement && node.parentElement.closest("script, style")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => translateTextNode(node, lang));

  document.querySelectorAll("input[placeholder]").forEach((input) => {
    const current = input.getAttribute("placeholder");
    const record = I18N_PLACEHOLDERS[current];
    if (record && record[lang]) input.setAttribute("placeholder", record[lang]);
  });
};

const mountLanguageToggle = (lang) => {
  const buttons = document.querySelectorAll(".lang-switch .lang-btn");
  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
    if (!button.dataset.bound) {
      button.addEventListener("click", () => {
        const nextLang = button.dataset.lang;
        localStorage.setItem(I18N_STORAGE_KEY, nextLang);
        applyPageTranslation(nextLang);
        mountLanguageToggle(nextLang);
        window.dispatchEvent(new CustomEvent("site-language-changed", { detail: { lang: nextLang } }));
      });
      button.dataset.bound = "1";
    }
  });
};

const initI18n = () => {
  const lang = getLang();
  document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
  mountLanguageToggle(lang);
  applyPageTranslation(lang);
  window.dispatchEvent(new CustomEvent("site-language-changed", { detail: { lang } }));
};

window.SiteI18n = {
  t(key, fallback) {
    const lang = getLang();
    if (UI_I18N[key] && UI_I18N[key][lang]) return UI_I18N[key][lang];
    return fallback;
  }
};

document.addEventListener("DOMContentLoaded", initI18n);
