function rootAppCtrl() {}

function rootApp() {
  return {
    template: '<form-wizard></form-wizard>',
    controller: rootAppCtrl,
    controllerAs: 'vm'
  };
}

angular.module('app').directive('rootApp', rootApp);