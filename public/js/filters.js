angular.module('myApp')
  .filter('beforeYearFilter', function () {
    return function (movies, year) {
      console.log("Args: ");
      console.log(arguments);
      return movies.filter(movie => movie.year < year);
    }
  })