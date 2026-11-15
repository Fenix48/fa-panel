// службовий файл: потрібен лише для того, щоб панель можна було встановити як додаток; нічого не зберігає й не перехоплює
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
