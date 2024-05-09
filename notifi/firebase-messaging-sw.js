importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js');


  const firebaseConfig = {
    apiKey: "AIzaSyAt5zqXydTJDGA80Eg30DSomjnSkjvkl8c",
    authDomain: "aulapwa-2ec82.firebaseapp.com",
    projectId: "aulapwa-2ec82",
    storageBucket: "aulapwa-2ec82.appspot.com",
    messagingSenderId: "770168072102",
    appId: "1:770168072102:web:921b165d4b1fef41b4d167",
    measurementId: "G-39D9PZ59NQ"
  };
  
firebase.initializeApp({
    'messagingSenderId': '770168072102'  // Substitua pelo seu sender ID
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    const title = 'Hello World';
    const options = {
        body: payload.data.status
    };
    return self.registration.showNotification(title, options);
});
