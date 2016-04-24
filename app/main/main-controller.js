(function() {
  angular.module('vvilliann')
    .controller('MainController', ['$scope', '$http', '$interval',
      function($scope, $http, $interval) {

        // pull blog & project titles from mongodb
        $scope.blogPostTitles = ["Post 1", "Post 2", "Post 3", "Post 4"];
        $scope.projectTitles = ["Project 1", "Project 2", "Project 3", "Project 4"];
      }]);
}());
