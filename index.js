var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('view engine', 'pug');
app.use(express.static('public'));


io.on('connection', function(socket) {
  socket.on('chat', function(msg) {
    io.emit('message', msg);
  });
});


app.get('/', function(req, res) {
  res.render('home', {title: 'My Express Project', message: 'Hello World!'});
});

http.listen(1337, function() {
  console.log('Started server');
});
