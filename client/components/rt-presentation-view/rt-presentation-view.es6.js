angular.module('app').directive('rtPresentationView', rtPresentationView);

function rtPresentationViewCtrl($meteor) {
  $meteor.subscribe('rtGif');
  var vm = this;
  vm.gifs = $meteor.collection(RTGif, true);
  vm.clear = function () {
    Meteor.call('removeAllRTQueries');
  }
}

function rtPresentationView() {
  return {
    templateUrl: 'client/components/rt-presentation-view/rt-presentation-view.ng.html',
    controller: rtPresentationViewCtrl,
    controllerAs: 'vm'
  };
}