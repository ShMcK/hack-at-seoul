angular.module('app').directive('presentationView', presentationView);

function presentationViewCtrl($meteor, socket) {
  this.isCurrent = 0;
  this.gifs = $meteor.collection(GifList).subscribe('gifList');
  this.prev = function () {
    this.isCurrent -= 1;
  };
  this.next = function () {
    this.isCurrent += 1;
  };
  this.stop = function () {
    toggleOverlay();
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

var triggerBttn = document.getElementById( 'trigger-overlay' ),
  overlay = document.querySelector( 'div.overlay' ),
  closeBttn = overlay.querySelector( 'button.overlay-close' );
transEndEventNames = {
  'WebkitTransition': 'webkitTransitionEnd',
  'MozTransition': 'transitionend',
  'OTransition': 'oTransitionEnd',
  'msTransition': 'MSTransitionEnd',
  'transition': 'transitionend'
},
  transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
  support = { transitions : Modernizr.csstransitions };

function toggleOverlay() {
  if( classie.has( overlay, 'open' ) ) {
    classie.remove( overlay, 'open' );
    classie.add( overlay, 'close' );
    var onEndTransitionFn = function( ev ) {
      if( support.transitions ) {
        if( ev.propertyName !== 'visibility' ) return;
        this.removeEventListener( transEndEventName, onEndTransitionFn );
      }
      classie.remove( overlay, 'close' );
    };
    if( support.transitions ) {
      overlay.addEventListener( transEndEventName, onEndTransitionFn );
    }
    else {
      onEndTransitionFn();
    }
  }
  else if( !classie.has( overlay, 'close' ) ) {
    classie.add( overlay, 'open' );
  }
}

triggerBttn.addEventListener( 'click', toggleOverlay );
closeBttn.addEventListener( 'click', toggleOverlay );