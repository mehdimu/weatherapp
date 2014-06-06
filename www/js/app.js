// Instantiate fastclick.js 
$(function() {
    FastClick.attach(document.body);
});

var app = angular.module("app", ['ui.router', 'ngSanitize'] );

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state("menu", {
            url: "/",
            views: {
                "menu": {
                    templateUrl: "templates/menu.html"
                },
                "content": {
                    templateUrl: "templates/weather.html",
                    controller: "locationCtrl"                    
                }
            }
        });
        $stateProvider.state("clock", {
            url: "/clock",
            views: {
                "menu": {
                    templateUrl: "templates/menu.html"
                },
                "content": {
                    templateUrl: "templates/clock.html",
                    controller: "clockCtrl"
                }
            }
        });
        $stateProvider.state("news", {
            url: "/news",
            views: {
                "menu": {
                    templateUrl: "templates/menu.html"
                },
                "content": {
                    templateUrl: "templates/news.html",
                    controller: "newsCtrl"
                }
            }
        });
   }]);