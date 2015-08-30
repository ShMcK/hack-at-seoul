angular.module('app').directive('rtPresentationView', rtPresentationView);

function rtPresentationViewCtrl($meteor, socket) {

  console.log(socket);

  socket.onmessage = function(evt) {
    console.log('socket: ', evt.data);
    var received = JSON.parse(evt.data);
    if (received.query) {
      Meteor.call('insertGiphy', received.query);
    }

    switch (received) {
      case 'left':
        //
        break;
      case 'right':
        //
        break;
      case 'ok':
        //
        break;
      default:
        console.log(received);
    }

  };

  $meteor.subscribe('rtGif');
  var vm = this;
  vm.gifs = $meteor.collection(RTGif, true);
  vm.clear = function () {
    Meteor.call('removeAllRTQueries');
  };

}

function rtPresentationView() {
  return {
    templateUrl: 'client/components/rt-presentation-view/rt-presentation-view.ng.html',
    controller: rtPresentationViewCtrl,
    controllerAs: 'vm'
  };
}