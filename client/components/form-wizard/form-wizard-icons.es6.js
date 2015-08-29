function formWizardIconsCtrl() {

}

function formWizardIcons() {
  return {
    templateUrl: 'client/components/form-wizard/form-wizard-icons.ng.html',
    controller: formWizardIconsCtrl,
    controllerAs: 'vm'
  };
}

angular.module('app').directive('formWizardIcons', formWizardIcons);
