var socket = io();
var $form = $('#box>form');
var $msg = $('#message');
var $ul = $('#main>ul');

$form.on('submit', function(e) {
  e.preventDefault();
  var message = $msg.val();

  socket.emit('chat', message);
  $msg.val('');
});

socket.on('message', function(chatMsg) {
  $ul.append($('<li />').text(chatMsg));  
});
