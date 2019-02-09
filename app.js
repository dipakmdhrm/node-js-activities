var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Set EJS as the view/template engine.
app.set('view engine', 'ejs');

// Start the server.
app.listen(3000);

// Static files.
app.use('/assets', express.static('assets'));

// Home page.
app.get('/', function(request, response){
  response.render('index');
});

// Contact page.
app.get('/contact', function (request, response) {
  response.render('contact');
});

// Contact page submission handler.
app.post('/contact', urlencodedParser,function (request, response) {
  if (!request.body) {
    return response.sendStatus(400);
  }
  response.render('contact-success', {
    data: request.body
  });
});

// Profile page.
app.get('/profile/:name', function (request, response) {
  var data = {
    age: 28,
    job: 'Developer',
    hobbies: [
      'Sports',
      'Books',
      'Food',
    ]
  };
  response.render('profile', {
    username: request.params.name,
    data: data
  });
});
