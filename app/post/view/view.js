var miControlador = miModulo.controller(
    "postViewController",
    ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
        $scope.sitio = "view";
        $http({
            method: 'GET',
            url: 'http://localhost:8081/blogbuster/json?ob=post&op=get&id=' + $routeParams.id
        }).then(function (response) {
            $scope.status = response.data.status;
            $scope.traerpost = response.data.response;
        }, function () {
        })
    }]
)