angular.module('myApp')
  .controller("myController", [
    '$scope',
    'mainCharacter',
    'CharacterVersionFactory',
    'BookService',
    function($scope, mainCharacter, characterVersionFactory, bookService) {
    console.log(bookService.getBooks());
    console.log(bookService.getBook(1));
    $scope.myFirstName = "Adam";
    $scope.myModel = "Ready Player One";
    $scope.mainCharacter = mainCharacter;
    $scope.characterVersion = characterVersionFactory;
    $scope.books = bookService.getBooks();
  }]);