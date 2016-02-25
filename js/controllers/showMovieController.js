app.controller('showMovieController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

$http.get("http://www.omdbapi.com/?i=" + $routeParams.searchParam).then(function(payload){
  $scope.movies = [];
  $scope.movies.push(payload.data);
 })
}]);
