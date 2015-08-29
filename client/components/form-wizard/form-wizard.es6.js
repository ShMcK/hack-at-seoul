function formWizardCtrl(Giphy) {
  var vm = this;
  vm.gifQuery = '';
  vm.submit = function () {
    Giphy.getImage(vm.gifQuery, 4, 'fixed_width').then(function (data) {
      console.log(data);
      vm.gifs = data;
    });
  };
}

function formWizard() {
  return {
    templateUrl: 'client/components/form-wizard/form-wizard.ng.html',
    controller: formWizardCtrl,
    controllerAs: 'vm'
  };
}

angular.module('app').directive('formWizard', formWizard);
