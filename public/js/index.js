var socket = io();

socket.on('connect', function() {
    console.log('Connected to server.');
});

socket.on('disconnect', function() {
    console.log('Disconnected from server.');
});

socket.on('newMessage', function(message) {
    console.log('newMessage: ', message);
});

socket.on('welcome', function(message) {
    console.log('welcome: ', message);
});

socket.on('newUser', function(message) {
    console.log('newUser', message);
});