(function() {
    angular.module('vvilliann', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('about', {
                url:"/about",
                templateUrl: "app/about/about.html",
                controller: "AboutController"
            })
            .state('main', {
              url: "/",
              templateUrl:"app/main/main.html",
              controller: "MainController"
            });
    });
}());
