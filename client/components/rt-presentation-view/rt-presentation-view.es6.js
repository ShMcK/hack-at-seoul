angular.module('app').directive('rtPresentationView', rtPresentationView);

function rtPresentationViewCtrl() {
  this.gif = {};
}

function rtPresentationView() {
  return {
    templateUrl: 'client/components/rt-presentation-view/rt-presentation-view.ng.html',
    controller: rtPresentationViewCtrl,
    controllerAs: 'vm'
  };
}