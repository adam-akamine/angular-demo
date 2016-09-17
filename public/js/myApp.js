// second argument to import dependencies
var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', function ($scope) {
  $scope.myFirstName = 'Adam';
  $scope.myModel = "Ready Player One";
}]);
