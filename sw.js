this.addEventListener('install', function(e) {
	e.waitUntil(caches.open('site-v1').then(function(cache) {
		return cache.addAll([
			'/test/',
			'/test/index.html',
			'/test/css/style.css',
			'/test/images/logo.png',
			'/test/images/family-large.jpg',
			'/test/images/meeting.jpg',
			'/test/images/handshake.jpg',
			'/test/images/family-small.jpg',
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