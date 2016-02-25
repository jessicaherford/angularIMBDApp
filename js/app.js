var app = angular.module('IMBDApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/:searchTerm', {
          templateUrl: 'partials/allMovies.html',
          controller: 'apiController'
      })
      .when('/:searchParam/show', {
        templateUrl: 'partials/showMovie.html',
        controller: 'showMovieController'
      })
});
