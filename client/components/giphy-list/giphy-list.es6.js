function giphyListCtrl(SlideService) {
  var vm = this;
  this.gifs = SlideService.slides;
  console.log(gifs);
}

function giphyList() {
  return {
    templateUrl: 'client/components/giphy-list/giphy-list.ng.html',
    controller: giphyListCtrl,
    controllerAs: 'vm'
  };
}

angular.module('app').directive('giphyList', giphyList);
