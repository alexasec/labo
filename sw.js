//参考ページ https://qiita.com/masanarih0ri/items/0845f312cff5c8d0ec60  //

const STATIC_DATA = [
  'index.html',
  'smp02.htm',
  'smp01.css'
];

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('cache_v1.2').then(function(cache) {
     return cache.addAll(STATIC_DATA);
   })
 );
});

self.addEventListener('fetch', function(event) {
 console.log(event.request.url);

 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});
