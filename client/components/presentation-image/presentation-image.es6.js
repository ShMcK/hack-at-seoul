function presentationImageCtrl() {

}

function presentationImage() {
  return {
    templateUrl: 'client/components/presentation-image/presentation-image.ng.html',
    controller: presentationImageCtrl,
    controllerAs: 'vm',
    scope: {
      gif: '='
    }
  };
}

angular.module('app').directive('presentationImage', presentationImage);
