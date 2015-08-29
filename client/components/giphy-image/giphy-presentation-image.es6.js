function giphyPresentationImageCtrl() {

}

function giphyPresentationImage() {
  return {
    templateUrl: 'client/components/giphy-image/giphy-presentation-image.ng.html',
    controller: giphyPresentationImageCtrl,
    controllerAs: 'vm',
    scope: {
      gif: '='
    }
  };
}

angular.module('app').directive('giphyPresentationImage', giphyPresentationImage);
