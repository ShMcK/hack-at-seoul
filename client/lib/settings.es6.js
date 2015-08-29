function SettingsService() {
  this.presentationType = 'real-time';
}

angular.module('app').service('SettingsService', SettingsService);