var app = angular.module("app", ['ui.router'] );

app.controller("locationCtrl", function ($scope, $http) {
    $scope.myData = {};
    $scope.myData.doClick = function(item, event) {
        var baseUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        var baseUrlLocation = "http://api.openweathermap.org/data/2.5/weather?units=metric&";
        var responsePromise = $http.get(baseUrl+$scope.location);
        responsePromise.success(function(data, status, headers, config) {
            $scope.myData.data = data;
            $scope.myData.fromServer = data.main.temp + " C " + data.sys.country;
        });
        responsePromise.error(function(data, status, headers, config) {
            alert("AJAX failed!");
        });
    }
});

app.config(['$urlRouterProvider', '$stateProvider', 
            function($urlRouterProvider, $stateProvider) {
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