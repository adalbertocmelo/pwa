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
            console.log('Notificação permitida pelo usuario.');
            
			randomNotification();
		} else {
            console.log('O usuário não permitiu notificar.');
        }
    });
});

/*
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
*/

var games = [
	{name: 'app01'  , author: 'João' , slug: 'icon-144x144.png'},
	{name: 'jogo 02', author: 'Paulo', slug: 'icon-144x144.png'},
	{name: 'PWA 03' , author: 'Pedro', slug: 'icon-144x144.png'}
]


function randomNotification() {
  const randomItem = Math.floor(Math.random() * games.length);
  const notifTitle = games[randomItem].name;
  const notifBody = `Created by ${games[randomItem].author}.`;
  const notifImg = `${games[randomItem].slug}`;
  const options = {
    body: notifBody,
    icon: notifImg,
  };
  new Notification(notifTitle, options);
  setTimeout(randomNotification, 30000);
}
