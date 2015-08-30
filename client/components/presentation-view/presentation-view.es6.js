angular.module('app').directive('presentationView', presentationView);

function presentationViewCtrl($meteor, socket, stBlurredDialog) {
  this.isCurrent = 0;
  this.gifs = $meteor.collection(GifList).subscribe('gifList');
  this.open = true;
  this.prev = function () {
    if (this.isCurrent > 0) {
      this.isCurrent -= 1;
    }
  };
  this.next = function () {
    if (this.isCurrent === this.gifs.length) {
      this.isCurrent += 1;
    }
  };
  this.stop = function () {
    stBlurredDialog.open();
  };
  this.events = $meteor.subscribe('events', {
    msg: function (data) {
      console.log(data);
    }
  });

  socket.onmessage = function (evt) {
    console.log('socket: ', evt.data);
    var received = JSON.parse(evt.data);

    switch (received) {
      case 'left':
        this.prev();
        break;
      case 'right':
        this.next();
        break;
      case 'ok':
        this.stop();
        break;
      default:
        console.log(received);
    }

  }
}

function presentationView() {
  return {
    templateUrl: 'client/components/presentation-view/presentation-view.ng.html',
    controller: presentationViewCtrl,
    controllerAs: 'vm'
  };
}