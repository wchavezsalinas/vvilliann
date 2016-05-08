(function() {
    angular.module('vvilliann')
      .controller('BlogController', ['$scope', '$http',
                             function($scope,   $http) {

        function getBlogPosts(initial) {
          $http.get('api/blog/get')
               .success(function(response) {
                 console.log(response);
                 if(initial) {
                   $scope.posts = response;
                 }
               })
               .error(function(error) {
                 console.error(error);
               });
        };
        getBlogPosts(true);

      }]);
}());
