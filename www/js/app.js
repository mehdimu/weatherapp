$(function() {
    FastClick.attach(document.body);
});

var app = angular.module("app", ['ui.router'] );

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state("menu", {
            url: "/",
            views: {
                "menu": {
                    templateUrl: "templates/menu.html"
                },
                "content":{templateUrl: "templates/weather.html"}
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
                    controller: function ($scope) {
                        $scope.time = "12 O'Clock";
                    }
                }
            }

        });
   }]);