const SW_VERSION = "jin-v2-notify-fallback";

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("message", (event) => {
  const data = event.data || {};
  if (data.type !== "SHOW_NOTIFICATION") {
    return;
  }
  event.waitUntil(
    self.registration.showNotification(data.title || "預報訂閱通知", {
      body: data.body || "",
      tag: data.tag || `jin-${Date.now()}`,
      renotify: true,
      vibrate: [180, 90, 180, 90, 180],
      icon: "./icons/icon-192.svg",
      badge: "./icons/icon-192.svg",
      data: data.data || {}
    })
  );
});
