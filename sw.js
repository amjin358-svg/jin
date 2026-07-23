const SW_VERSION = "jin-v3-msn-utility-alerts";

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
      requireInteraction: true,
      vibrate: [180, 90, 180, 90, 180],
      icon: "./icons/icon-192.svg",
      badge: "./icons/icon-192.svg",
      data: data.data || {}
    })
  );
});
