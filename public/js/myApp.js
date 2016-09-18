// second argument to import dependencies
var myApp = angular.module('myApp', [])
  .config(['MoviesProvider',
    function (MoviesProvider) {
      MoviesProvider.setEndpoint('/api/movies');
    }])
  .run(['$rootScope', 'APP_VERSION', function ($rootScope, APP_VERSION) {
    $rootScope.APP_VERSION = APP_VERSION;
  }]);
