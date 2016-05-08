(function() {
    angular.module('vvilliann')
        .controller('MainController', ['$scope', '$http', '$interval',
            function($scope, $http, $interval) {

                // pull blog & project titles from mongodb

                function getBlogPosts(initial) {
                    $http.get('api/blog/get')
                        .success(function(response) {
                            if (initial) {
                                $scope.posts = response;
                            }
                        })
                        .error(function(error) {
                            console.error(error);
                        });
                };
                getBlogPosts(true);

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
