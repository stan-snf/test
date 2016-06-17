this.addEventListener('install', function(e) {
	e.waitUntil(caches.open('site-v1').then(function(cache) {
		return cache.addAll([
			'/test/',
			'/test/css/style.css'
		]);
	}));
});

this.addEventListener('fetch', function(e) {
	e.respondWith(
		caches.match(e.request).catch(function() {
			return e.default();
		})
	);
});