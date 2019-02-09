var express = require('express');

var app = express();

// Start the server.
app.listen(3000);

app.get('/', function(request, response){
  response.send('Hello world!!');
});

app.get('/profile/:id', function (request, response) {
  response.send(`Hello profile ${request.params.id}!!`);
});
