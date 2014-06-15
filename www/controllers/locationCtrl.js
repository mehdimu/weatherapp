app.controller("locationCtrl", ['$scope', '$http', function ($scope, $http) {
    $scope.weather = {};
    $scope.weather.loadingIMG = '<i class="fa fa-circle-o-notch fa-spin"></i>';
    $scope.weather.getWeather = function (position) {
        var baseUrl, lat, lon, requestUrl, responsePromise;
        baseUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&APPID=d0945ea3687d4d6156b72429f6df09bd&";
        if (position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            requestUrl = baseUrl + "lat=" + lat + "&lon=" + lon;
            responsePromise = $http.get(requestUrl);
        }
        else {
            requestUrl = baseUrl + 'q=' + $scope.location;
            responsePromise = $http.get(requestUrl);
            $('#show-temp')[0].innerHTML = $scope.weather.loadingIMG;
        }
        responsePromise.success( function(data, status, headers, config) {
            if (data.cod === 200){
                $scope.weather.data = data;
                $scope.weather.fromServer = data.main.temp + " C " + data.sys.country;
                $('#show-temp')[0].innerHTML = $scope.weather.fromServer;
            }
            else {
                $('#show-temp')[0].innerHTML = data.message;
            }         
        });
        responsePromise.error(function(data, status, headers, config) {
            alert("AJAX failed!");
        });
    };
    $scope.weather.getLocation = function () {
        if (navigator.geolocation) {
            $('#show-temp')[0].innerHTML = $scope.weather.loadingIMG;
            navigator.geolocation.getCurrentPosition($scope.weather.getWeather);
        }
        else {
            alert("Error");
        }
    };
}]);