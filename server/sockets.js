var WebSocket = Meteor.npmRequire('ws');

var USING_SHARED_PROTOCOL = false;

if (USING_SHARED_PROTOCOL) {

  // Shared Protocol

  var ws = new WebSocket('ws://192.168.0.69:9090');
  ws.on('open', function open() {
    ws.send('Open for bidniz');
  });
  ws.on('message', function (data, flags) {

  });
  ws.onerror = function (event) {
    console.log('ws error');
  }
} else {

  // Socket.io

  console.log('using socket.io...');

  io = Meteor.npmRequire('socket.io')(8080);

//if address already in use, it throw an error.

  io.on('connection', function (socket) {
    socket.emit('news', {
      hello: 'world'
    });
    /*socket.on('my other event', Meteor.bindEnvironment(function(err, res) {
     console.log(res);
     Panini.insert({
     text: "Hello, world!"
     });
     }, function(err) {
     console.error(err);
     }));*/
    socket.on('my other event', function (data) {
      console.log(data);
      //Fiber(function() {
      //  //Panini.insert({
      //  //  text: "Hello, world!"
      //  //}, function(err, res){
      //  //  if(err)
      //  //    console.error("Insert failed");
      //  //  else
      //  //    console.log('New insert: '+res);
      //  //});
      //}).run();
    });
  });
}