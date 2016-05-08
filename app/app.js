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
                url: "/blog/:url",
                templateUrl: "app/blog/blog-post.html",
                controller: "BlogPostController",
                params: {
                    url: null,
                    blogPost: null
                }
            })
            .state('projects', {
                url: "/projects",
                templateUrl: "app/projects/projects.html",
                controller: "ProjectsController"
            })
            .state('project', {
                url: "/projects/:url",
                templateUrl: "app/projects/project-post.html",
                controller: "ProjectPostController",
                params: {
                    url: null,
                    project: null
                }
            });
    });
}());
