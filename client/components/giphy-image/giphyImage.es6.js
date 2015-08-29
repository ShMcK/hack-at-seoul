function giphyImage() {
  return {
    templateUrl: 'client/components/giphy-image/giphy-image.ng.html',
    controllerAs: 'vm',
    scope: {
      gif: '=',
      index: '@',
    },
    controller: function (SlideService, $scope) {
      $scope.select = function (gif) {
        console.log(gif);
      }
    }
  };
}

angular.module('app').directive('giphyImage', giphyImage);
