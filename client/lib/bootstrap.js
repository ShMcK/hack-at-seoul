'use strict';

/**
 *  App Module
 */
angular.module('app', [
  /* third party */
  'angular-meteor',
  'ui.router'
]);

/**
 * Bootstrap App (ng-app)
 */
function onReady() {
  angular.bootstrap(document, ['app']);
}

/**
 * Deliver Mobile Version
 */
if (Meteor.isCordova) {
  angular.element(document).on('deviceReady', onReady);
} else {
  angular.element(document).ready(onReady);
}