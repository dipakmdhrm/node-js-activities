var http = require('http');

var server = http.createServer(function (request, response){
  console.log(request.url);
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  })

  response.end('Hello world!');
});

server.listen(3000, '0.0.0.0');
console.log('Listening to 3000!')
