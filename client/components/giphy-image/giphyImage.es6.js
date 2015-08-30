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
      this.selectedUrl = null;
      this.select = function (gif) {
        SlideService.addSlide(gif, $scope.query);
        this.selectedUrl = gif.url;
      };
      this.isSelected = function (gif) {
        return gif.url == this.selectedUrl;
      }
    }
  };
}

angular.module('app').directive('giphyImage', giphyImage);
