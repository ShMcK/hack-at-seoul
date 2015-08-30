function socket($rootScope) {

  var USING_PROTOCOL = true;

  if (USING_PROTOCOL) {


    var ws = new WebSocket('ws://192.168.0.69:9090');

    ws.onopen = function () {
      console.log('socket open');
    };

    ws.onclose = function () {
      console.log('socket closed');
    };
      ws.onerror = function (error) {
        console.log('error');
      }
    return ws;


  } else {
    // socket.io

    var socket = io.connect();
    console.log('socket created');

    return {
      on: function (eventName, callback) {
        function wrapper() {
          var args = arguments;
          $rootScope.$apply(function () {
            callback.apply(socket, args);
          });
        }

        socket.on(eventName, wrapper);

        return function () {
          socket.removeListener(eventName, wrapper);
        };
      },

      emit: function (eventName, data, callback) {
        socket.emit(eventName, data, function () {
          var args = arguments;
          $rootScope.$apply(function () {
            if (callback) {
              callback.apply(socket, args);
            }
          });
        });
      }
    };
  }
}

angular.module('app').factory('socket', socket);