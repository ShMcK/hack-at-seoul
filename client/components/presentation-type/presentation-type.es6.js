angular.module('app').directive('presentationType', presentationType);

function presentationTypeCtrl() {
  var vm = this;
  vm.type = 'real-time';
  vm.select = function(type) {
    console.log(type);
    vm.type = type;
  }
}

function presentationType() {
  return {
    templateUrl: 'client/components/presentation-type/presentation-type.ng.html',
    controller: presentationTypeCtrl,
    controllerAs: 'ptype'
  };
}