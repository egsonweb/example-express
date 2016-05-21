var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello world from express!');
});

app.get('/about', function(req, res) {
  res.send('About me page here!');
});


app.get('/contact', function(req, res) {
  res.send('Contact page here!');
});


app.listen(1337, function() {
  console.log('Server listening on port %d', app.port);
});
