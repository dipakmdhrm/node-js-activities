var express = require('express');

var app = express();

// Start the server.
app.listen(3000);

app.get('/', function(request, response){
  response.sendFile(__dirname + '/index.html');
});

app.get('/contact', function (request, response) {
  response.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:id', function (request, response) {
  response.sendFile(__dirname + '/profile.html');
});
