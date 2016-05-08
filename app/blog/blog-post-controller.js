(function() {
    angular.module('vvilliann')
        .controller('BlogPostController', ['$scope', '$http', '$stateParams',
            function($scope, $http, $stateParams) {
                $scope.url = $stateParams.url;
                function getBlogPost(initial) {
                    $http({
                            url: 'api/blog/getPost',
                            method: "GET",
                            params: {
                                blog_url: $scope.url
                            }
                        })
                        .success(function(response) {
                            if (initial) {
                                $scope.post = response;
                            }
                        })
                        .error(function(error) {
                            console.error(error);
                        });
                };
                getBlogPost(true);
            }
        ]);
}());
