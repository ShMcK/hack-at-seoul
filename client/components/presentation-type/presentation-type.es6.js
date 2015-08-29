function presentationTypeCtrl(SettingsService) {
  var vm = this;
  vm.settings = SettingsService;
  vm.select = function (type) {
    SettingsService.presentationType = type;
  }
}

function presentationType() {
  return {
    templateUrl: 'client/components/presentation-type/presentation-type.ng.html',
    controller: presentationTypeCtrl,
    controllerAs: 'p'
  };
}

angular.module('app').directive('presentationType', presentationType);

