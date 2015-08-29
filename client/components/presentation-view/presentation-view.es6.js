angular.module('app').directive('presentationView', presentationView);

function presentationViewCtrl($meteor) {
  this.isCurrent = 0;
  this.gifs = $meteor.collection(GifList).subscribe('gifList');
  this.prev = function() {
    this.isCurrent -= 1;
  }
  this.next = function() {
    this.isCurrent += 1;
  }
}

function presentationView() {
  return {
    templateUrl: 'client/components/presentation-view/presentation-view.ng.html',
    controller: presentationViewCtrl,
    controllerAs: 'vm'
  };
}