var app = angular.module("app", ['ui.router'] );

app.controller("locationCtrl", function ($scope, $http) {
    $scope.myData = {};
    $scope.myData.doClick = function(item, event) {
        var baseUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        var responsePromise = $http.get(baseUrl+$scope.location);
        $('#show-temp')[0].innerHTML = '<img src="../img/animated_loading.gif" height="25px">';
        responsePromise.success(function(data, status, headers, config) {
            $scope.myData.data = data;
            $scope.myData.fromServer = data.main.temp + " C " + data.sys.country;
            $('#show-temp')[0].innerHTML = $scope.myData.fromServer;
        });
        responsePromise.error(function(data, status, headers, config) {
            alert("AJAX failed!");
        });
    }
    $scope.myData.doClick2 = function (position) {
        var baseUrlLocation = "http://api.openweathermap.org/data/2.5/weather?units=metric&";
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var responsePromise = $http.get(baseUrlLocation + "lat=" + lat + "&lon=" + lon);
        responsePromise.success(function(data, status, headers, config) {
            $scope.myData.data = data;
            $scope.myData.fromServer = data.main.temp + " C " + data.sys.country;
            $('#show-temp')[0].innerHTML = $scope.myData.fromServer;
        });
        responsePromise.error(function(data, status, headers, config) {
            alert("AJAX failed!");
        });
    }
    $scope.myData.getLocation = function () {
        if (navigator.geolocation) {
            $('#show-temp')[0].innerHTML = '<img src="../img/animated_loading.gif" height="25px">';
            navigator.geolocation.getCurrentPosition($scope.myData.doClick2);
        }
        else {
            alert("Error");
        }
    }
});

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