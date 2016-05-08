(function() {
    angular.module('vvilliann', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('about', {
                url: "/about",
                templateUrl: "app/about/about.html",
                controller: "AboutController"
            })
            .state('main', {
                url: "/",
                templateUrl: "app/main/main.html",
                controller: "MainController"
            })
            .state('blog', {
                url: "/blog",
                templateUrl: "app/blog/blog.html",
                controller: "BlogController"
            })
            .state('post', {
                url: "/blog/:title",
                templateUrl: "app/blog/blog-post.html",
                controller: "BlogPostController",
                params: {
                    title: null,
                    blogPost: null
                }
            })
            .state('projects', {
                url: "/projects",
                templateUrl: "app/projects/projects.html",
                controller: "ProjectsController"
            });
    });
}());
