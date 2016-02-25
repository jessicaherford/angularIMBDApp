app.controller('apiController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){

  $scope.submitPost = function(){
  $http.get("http://www.omdbapi.com/?s=" + $scope.input)
  .then(function(response){
    $scope.movies = [];
    response.data.Search.forEach(function(movie){
      $scope.movies.push(movie);
    })
    console.log($scope.movies);
  })
}

}]);
