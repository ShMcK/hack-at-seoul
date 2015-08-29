function giphySearchCtrl(Giphy, $scope, SlideService) {
  var vm = this;
  vm.gifQuery = '';
  vm.submit = function () {
    console.log('submit');
    Giphy.getImage(vm.gifQuery, 4, 'fixed_width').then(function (data) {
      console.log('search data', data);
      vm.searchGifs = data;
    });
  };
  $scope.select = function (gif) {
    console.log(gif);
    console.log(vm.gifQuery);
    SlideService.addSlide(gif, vm.gifQuery);
  }
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

$(function () {
  $('a[href="#search"]').on('click', function(event) {
    event.preventDefault();
    $('#search').addClass('open');
    $('#search > form > input[type="search"]').focus();
  });

  $('#search, #search button.close').on('click keyup', function(event) {
    if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
      $(this).removeClass('open');
    }
  });

  //Do not include! This prevents the form from submitting for DEMO purposes only!
  $('form').submit(function(event) {
    event.preventDefault();
    return false;
  })
});