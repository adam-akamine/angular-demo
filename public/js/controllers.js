angular.module('myApp')
  .controller("myController", ['$scope', 'mainCharacter', 'CharacterVersionFactory', function($scope, mainCharacter, characterVersionFactory) {
    console.log(characterVersionFactory);
    $scope.myFirstName = "Adam";
    $scope.myModel = "Ready Player One";
    $scope.mainCharacter = mainCharacter;
    $scope.characterVersion = characterVersionFactory;
  }]);