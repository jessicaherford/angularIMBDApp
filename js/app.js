var app = angular.module('IMBDApp', ['ngRoute']);


app.controller('apiController', [ '$scope', '$http', function($scope, $http){
  $scope.$watch('search', function() {
    fetch();
  });

  $scope.search= "Kill Bill";

  function fetch(){
  $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
  .then(function(response){ $scope.details = response.data; } );

  $http.get("http://www.omdbapi.com/?s=" + $scope.search)
  .then(function(response){ $scope.related = response.data; console.log($scope.related); } );
  }

  $scope.update = function(movie){
   $scope.search = movie.Title;
  };


}]);
