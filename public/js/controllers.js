angular.module('myApp')
  .controller("myController", [
    '$scope',
    'mainCharacter',
    'CharacterVersionFactory',
    'BookService',
    'Movies',
    function($scope, mainCharacter, characterVersionFactory, BookService, Movies) {
    $scope.myFirstName = "Adam";
    $scope.myModel = "Ready Player One";
    $scope.mainCharacter = mainCharacter;
    $scope.characterVersion = characterVersionFactory;
    $scope.BookService = BookService;
    $scope.movies = [];
    // Movies.getMovies()
    //   .then((response) => {
    //     $scope.movies = response.data;
    //   });
  }])
  .controller("booksController", [
    '$scope',
    'BookService',
    function($scope, BookService) {
      $scope.BookService = BookService;
    }
  ])
  .controller("moviesController", [
    '$scope',
    'Movies',
    function($scope, Movies) {
    $scope.movies = [];
    Movies.getMovies()
      .then((response) => {
        $scope.movies = response.data;
      });
  }])