this.addEventListener('install', function(e) {
	e.waitUntil(caches.create('site-v1').then(function(cache) {
		return cache.add([
			'/test/',
			'/test/css/style.css'
		]);
	}));
});

this.addEventListener('fetch', function(e) {
	e.respondWith(
		caches.match(e.request)
	);
});