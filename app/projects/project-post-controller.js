(function() {
    angular.module('vvilliann')
        .controller('ProjectPostController', ['$scope', '$http', '$stateParams',
            function($scope, $http, $stateParams) {
                $scope.url = $stateParams.url;

                function getProjectPost(initial) {
                    $http({
                            url: 'api/projects/getPost',
                            method: "GET",
                            params: {
                                project_url: $scope.url
                            }
                        })
                        .success(function(response) {
                            if (initial) {
                                $scope.project = response;
                            }
                        })
                        .error(function(error) {
                            console.error(error);
                        });
                };
                getProjectPost(true);
            }
        ]);
}());
