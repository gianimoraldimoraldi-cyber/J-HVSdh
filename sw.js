self.addEventListener('push', function(event) {
    const options = {
        body: 'Le tue risorse GTA V sono pronte!',
        icon: 'https://cdn-icons-png.flaticon.com/512/295/295128.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '1'
        }
    };
    event.waitUntil(
        self.registration.showNotification('SISTEMA GTA V', options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
});
