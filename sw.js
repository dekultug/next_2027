/* Service worker — offline cache + cập nhật ngầm (stale-while-revalidate) */
const CACHE = "jm-android-v9";
const CORE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./assets/css/styles.css?v=9",
  "./assets/js/data.js?v=9",
  "./assets/js/app.js?v=9",
  "./assets/icons/icon-512.png",
  "./assets/icons/icon-180.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;

  // Điều hướng trang: network-first, offline thì trả index đã cache
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then((res) => { const cp = res.clone(); caches.open(CACHE).then((c) => c.put("./index.html", cp)); return res; })
        .catch(() => caches.match("./index.html").then((r) => r || caches.match("./")))
    );
    return;
  }

  // Tài nguyên khác: stale-while-revalidate (trả cache ngay, cập nhật ngầm)
  e.respondWith(
    caches.match(req).then((hit) => {
      const net = fetch(req)
        .then((res) => {
          if (res && (res.status === 200 || res.type === "opaque")) {
            const cp = res.clone();
            caches.open(CACHE).then((c) => c.put(req, cp));
          }
          return res;
        })
        .catch(() => hit);
      return hit || net;
    })
  );
});
