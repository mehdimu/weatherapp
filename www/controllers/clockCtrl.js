app.controller('clockCtrl', function ($scope, $http) {
    $scope.getNews = function () {
        var baseUrl = "https://ajax.googleapis.com/ajax/services/search/news?v=1.0&callback=JSON_CALLBACK";
        var url = baseUrl + "&q=" + $scope.keyword;
        if (!$scope.keyword) {return};
        var request = $http.jsonp(url);
        request.success(function (data, status, headers, config) {
            $scope.news = data.responseData.results;
        })
        request.error(function(data, status, headers, config) {
            console.error('Error fetching feed:', data);
        });
    };
});