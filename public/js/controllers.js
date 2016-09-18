angular.module('myApp')
  .controller("myController", [
    '$scope',
    'mainCharacter',
    'CharacterVersionFactory',
    'BookService',
    'Movies',
    function($scope, mainCharacter, characterVersionFactory, BookService, Movies) {
    console.log(BookService.getBooks());
    console.log(BookService.getBook(1));
    $scope.myFirstName = "Adam";
    $scope.myModel = "Ready Player One";
    $scope.mainCharacter = mainCharacter;
    $scope.characterVersion = characterVersionFactory;
    $scope.BookService = BookService;
    $scope.movies = [];
    Movies.getMovies()
      .then((response) => {
        $scope.movies = response.data;
      });
  }]);