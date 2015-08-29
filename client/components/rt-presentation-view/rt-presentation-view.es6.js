angular.module('app').directive('rtPresentationView', rtPresentationView);

function rtPresentationViewCtrl($meteor) {
  this.gif = {};
  this.exit = function () {
    // exit
  };

  this.query = $meteor.collection(Query).subscribe('query');
  this.events = $meteor.collection(Events).subscribe('events');
}

function rtPresentationView() {
  return {
    templateUrl: 'client/components/rt-presentation-view/rt-presentation-view.ng.html',
    controller: rtPresentationViewCtrl,
    controllerAs: 'vm'
  };
}