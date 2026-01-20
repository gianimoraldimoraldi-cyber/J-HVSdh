self.addEventListener('push', function(e) {
    self.registration.showNotification('SISTEMA GTA V', {
        body: 'Risorse caricate con successo!',
        icon: 'https://cdn-icons-png.flaticon.com/512/295/295128.png'
    });
});
