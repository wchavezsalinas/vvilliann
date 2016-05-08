(function() {
    angular.module('vvilliann')
        .controller('BlogPostController', ['$scope', '$http', '$stateParams',
            function($scope, $http, $stateParams) {
                $scope.post = $stateParams.blogPost;

            }
        ]);
}());
