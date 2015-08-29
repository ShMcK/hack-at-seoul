function giphyListCtrl($meteor) {
  var vm = this;
  vm.gifList = $meteor.collection(GifList).subscribe('gifList');
  vm.saveNotes = function (gif) {
    GifList.update(gif.id, {$set: {notes: gif.notes}});
  }
}

function giphyList() {
  return {
    templateUrl: 'client/components/giphy-list/giphy-list.ng.html',
    controller: giphyListCtrl,
    controllerAs: 'gl'
  };
}

angular.module('app').directive('giphyList', giphyList);
