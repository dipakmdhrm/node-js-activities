var express = require('express');

var app = express();

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
