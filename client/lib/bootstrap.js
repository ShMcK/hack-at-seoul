'use strict';

Meteor.call('removeAllEvents');
Meteor.call('removeAllQueries');
Meteor.call('removeAllGifs');

/**
 *  App Module
 */
angular.module('app', [
  /* third party */
  'angular-meteor',
  'btford.socket-io'
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