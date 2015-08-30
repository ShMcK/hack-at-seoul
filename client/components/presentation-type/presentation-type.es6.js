function presentationTypeCtrl(SettingsService) {
  var vm = this;
  vm.settings = SettingsService;
  vm.select = function (type) {
    SettingsService.presentationType = type;
  };
  vm.theme = '';
  vm.selectTheme = function() {
    Meteor.call('setSettings', {useTheme: true, theme: vm.theme});
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

