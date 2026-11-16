// Службовий файл панелі Forsaken Atlas, версія 2 (16.11.2026, 02:16; автор: «поки сайт ще минулий» — телефон показував збережену копію сторінки).
// 1) сторінку панелі завжди брати з сервера, а не зі збереженої копії (GitHub дозволяє тримати її в пам'яті 10 хвилин);
// 2) коли цей файл оновився — відкриті вікна панелі перезавантажуються самі, один раз.
// Нічого не зберігає й нікуди нічого не надсилає; решта запитів (цифри, відео) йдуть як завжди.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil(self.clients.claim().then(function () { return self.clients.matchAll({type: 'window'}); }).then(function (cs) {
    cs.forEach(function (c) { try { c.navigate(c.url); } catch (x) {} });
  }));
});
self.addEventListener('fetch', function (e) {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request, {cache: 'no-store'}).catch(function () { return fetch(e.request); }));
});
