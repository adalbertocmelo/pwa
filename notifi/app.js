if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('service-worker.js').then(function(registration) {
		console.log('Service Worker Registered!', registration);
	}).catch(function(err) {
		console.log('Service Worker registration failed:', err);
	});
}

document.getElementById('btnAllowNotifications').addEventListener('click', function() {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
            // Aqui você pode inscrever o usuário com o Firebase para receber notificações
        } else {
            console.log('User denied the notification permission.');
        }
    });
});

function scheduleNotification(message, delay) {
	console.log(message,delay);
    setTimeout(() => {
		console.log('notificar');
        if (Notification.permission === "granted") {
			console.log('tem permissão');
            new Notification(message);
			console.log(message);
        }
    }, delay);
}

// Agendar uma notificação para daqui a 10 segundos
document.getElementById('btnScheduleNotification').addEventListener('click', () => {
    scheduleNotification("Esta é a sua notificação agendada!", 10000); // 10 segundos
});

var games = [
	{name: 'app01'  , author: 'João' , slug: ''},
	{name: 'jogo 02', author: 'Paulo', slug: ''},
	{name: 'PWA 03' , author: 'Pedro', slug: ''}
]


function randomNotification() {
  const randomItem = Math.floor(Math.random() * games.length);
  const notifTitle = games[randomItem].name;
  const notifBody = `Created by ${games[randomItem].author}.`;
  const notifImg = `data/img/${games[randomItem].slug}.jpg`;
  const options = {
    body: notifBody,
    icon: notifImg,
  };
  new Notification(notifTitle, options);
  setTimeout(randomNotification, 30000);
}