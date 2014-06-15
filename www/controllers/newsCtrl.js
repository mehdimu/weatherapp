app.controller('newsCtrl', ['$scope', '$http', '$timeout', function ($scope, $http, $timeout) {
    $scope.getNews = function () {
        $scope.news = {};
        var baseUrl = "https://ajax.googleapis.com/ajax/services/search/news?v=1.0&callback=JSON_CALLBACK";
        var url = baseUrl + "&q=" + $scope.keyword;
        if (!$scope.keyword) {return;}
        $scope.loading = true;
        var request = $http.jsonp(url);
        request.success(function (data, status, headers, config) {
            $timeout(function(){
                $scope.loading = false;
                $scope.news = data.responseData.results;
            }, 1000);
        });
        request.error(function(data, status, headers, config) {
            $scope.loading = false;
            $scope.news = [];
        });
    };
}]);