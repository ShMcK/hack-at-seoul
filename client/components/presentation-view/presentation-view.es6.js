angular.module('app').directive('presentationView', presentationView);

function presentationViewCtrl(SlideService) {
  this.isCurrent = 0;
  this.gifs = SlideService.slides;
}

function presentationView() {
  return {
    templateUrl: 'client/components/presentation-view/presentation-view.ng.html',
    controller: presentationViewCtrl,
    controllerAs: 'vm'
  };
}