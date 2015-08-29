angular.module('app').directive('rtPresentationView', rtPresentationView);

function rtPresentationViewCtrl($meteor) {
  var vm = this;
  vm.gifs = $meteor.collection(RTGif, true).subscribe('rtGif');
}

function rtPresentationView() {
  return {
    templateUrl: 'client/components/rt-presentation-view/rt-presentation-view.ng.html',
    controller: rtPresentationViewCtrl,
    controllerAs: 'vm'
  };
}