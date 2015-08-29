function giphySearchCtrl(Giphy) {
  var vm = this;
  vm.gifQuery = '';
  vm.submit = function () {
    console.log('submit');
    Giphy.getImage(vm.gifQuery, 4, 'fixed_width').then(function (data) {
      console.log('search data', data);
      vm.gifs = data;
    });
  };
}

function giphySearch() {
  return {
    scope: {
      gifs: '='
    },
    bindToController: true,
    templateUrl: 'client/components/giphy-search/giphy-search.ng.html',
    controller: giphySearchCtrl,
    controllerAs: 'vm'
  };
}

angular.module('app').directive('giphySearch', giphySearch);
