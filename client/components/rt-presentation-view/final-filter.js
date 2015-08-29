function final() {
  return function (array) {
    return array[array.length - 1];
  }
}

angular.module('app').filter('final', final);