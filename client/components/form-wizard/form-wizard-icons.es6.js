function formWizardIconsCtrl(SettingsService) {
  var vm = this;
  vm.settings = SettingsService;
}

function formWizardIcons() {
  return {
    templateUrl: 'client/components/form-wizard/form-wizard-icons.ng.html',
    controller: formWizardIconsCtrl,
    controllerAs: 'fwi'
  };
}

angular.module('app').directive('formWizardIcons', formWizardIcons);
