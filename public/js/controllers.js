angular.module('myApp')
  .controller("myController", ['$scope', function($scope) {
    $scope.myFirstName = "Adam";
    $scope.myModel = "Ready Player One";
  }]);