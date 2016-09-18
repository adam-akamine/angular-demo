// second argument to import dependencies
var myApp = angular.module('myApp', [])
  .run(['$rootScope', 'APP_VERSION', function ($rootScope, APP_VERSION) {
    $rootScope.APP_VERSION = APP_VERSION;
  }]);
