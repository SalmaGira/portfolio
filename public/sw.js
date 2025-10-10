const CACHE_NAME = 'portfolio-v2';
const STATIC_CACHE = 'static-v2';

// Blocked domains (antivirus software and trackers)
const BLOCKED_DOMAINS = [
  'kaspersky-labs.com',
  'gc.kes.v2.scr.kaspersky-labs.com',
  'kes.v2.scr.kaspersky-labs.com'
];

// Only cache critical resources
const urlsToCache = [
  '/',
  '/src/critical.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)),
      self.skipWaiting()
    ])
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      // Clean old caches
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE) {
              return caches.delete(cacheName);
            }
          })
        );
      }),
      self.clients.claim()
    ])
  );
});

self.addEventListener('fetch', (event) => {
  // Block requests from antivirus software and trackers
  const url = new URL(event.request.url);
  const isBlocked = BLOCKED_DOMAINS.some(domain => 
    url.hostname.includes(domain) || url.href.includes(domain)
  );
  
  if (isBlocked) {
    console.log('Blocked request to:', url.href);
    event.respondWith(new Response('', { status: 204 }));
    return;
  }
  
  // Force HTTPS for all requests
  if (url.protocol === 'http:' && url.hostname !== 'localhost') {
    const httpsUrl = url.href.replace('http://', 'https://');
    event.respondWith(fetch(httpsUrl));
    return;
  }
  
  // Only cache GET requests
  if (event.request.method !== 'GET') return;
  
  // Cache strategy: Cache first for static assets, network first for pages
  if (event.request.destination === 'image' || 
      event.request.destination === 'style' || 
      event.request.destination === 'script') {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request).then(fetchResponse => {
          const responseClone = fetchResponse.clone();
          caches.open(STATIC_CACHE).then(cache => {
            cache.put(event.request, responseClone);
          });
          return fetchResponse;
        });
      })
    );
  }
});