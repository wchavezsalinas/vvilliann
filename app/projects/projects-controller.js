(function() {
    angular.module('vvilliann')
        .controller('ProjectsController', ['$scope', '$http',
            function($scope, $http) {

                  function getProjectPosts(initial) {
                      $http.get('api/projects/get')
                          .success(function(response) {
                              if (initial) {
                                  $scope.projects = response;
                              }
                          })
                          .error(function(error) {
                              console.error(error);
                          });
                  };
                  getProjectPosts(true);


            }
        ]);
}());
