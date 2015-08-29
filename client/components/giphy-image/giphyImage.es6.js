function giphyImage() {
  return {
    templateUrl: 'client/components/giphy-image/giphy-image.ng.html',
    controllerAs: 'vm',
    scope: {
      gif: '=',
      index: '@',
      query: '='
    },
    controller: function (SlideService, $scope) {
      $scope.select = function (gif) {
        SlideService.addSlide(gif, $scope.query)
      }
    }
  };
}

angular.module('app').directive('giphyImage', giphyImage);
