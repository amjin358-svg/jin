(() => {
  const STORAGE_KEY = "bluerock-lang";
  const DEFAULT_LANG = "zh";
  const SUPPORTED = new Set(["zh", "en"]);

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    return SUPPORTED.has(saved) ? saved : DEFAULT_LANG;
  }

  function setLang(lang) {
    const next = SUPPORTED.has(lang) ? lang : DEFAULT_LANG;
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next === "zh" ? "zh-Hant" : "en";
    window.dispatchEvent(new CustomEvent("bluerock:langchange", { detail: { lang: next } }));
  }

  function createSwitch() {
    const topbar = document.querySelector(".topbar");
    if (!topbar || topbar.querySelector(".lang-switch")) return;

    const wrap = document.createElement("div");
    wrap.className = "lang-switch";
    wrap.innerHTML =
      '<button type="button" data-lang="zh">中</button>' +
      '<button type="button" data-lang="en">EN</button>';

    wrap.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLButtonElement)) return;
      const lang = target.dataset.lang || DEFAULT_LANG;
      setLang(lang);
      renderActive(lang);
    });

    const anchor = document.querySelector("[data-lang-switch]");
    if (anchor) {
      anchor.replaceWith(wrap);
    } else {
      topbar.appendChild(wrap);
    }
    renderActive(getLang());
  }

  function renderActive(lang) {
    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
  }

  function getByPath(obj, key) {
    if (!obj || !key) return undefined;
    return key.split(".").reduce((acc, part) => (acc && part in acc ? acc[part] : undefined), obj);
  }

  function applyTranslations(config, lang) {
    const table = (config.translations && config.translations[lang]) || {};

    document.querySelectorAll("[data-i18n], [data-i18n-key]").forEach((node) => {
      const key = node.getAttribute("data-i18n") || node.getAttribute("data-i18n-key");
      const value = getByPath(table, key);
      if (typeof value === "string") {
        node.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      const key = node.getAttribute("data-i18n-placeholder");
      const value = getByPath(table, key);
      if (typeof value === "string") {
        node.setAttribute("placeholder", value);
      }
    });
  }

  function initI18n(config) {
    const lang = window.BlueRockI18n.init();
    applyTranslations(config, lang);
    window.addEventListener("bluerock:langchange", (event) => {
      applyTranslations(config, event.detail.lang);
    });
  }

  window.BlueRockI18n = {
    init() {
      createSwitch();
      const lang = getLang();
      document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
      renderActive(lang);
      window.dispatchEvent(new CustomEvent("bluerock:langchange", { detail: { lang } }));
      return lang;
    },
    getLang,
    setLang
  };

  window.initI18n = initI18n;
})();
