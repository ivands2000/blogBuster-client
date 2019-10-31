miModulo.factory('promesasService', ['$http',
    function ($http) {
        return {
            ajaxGet: function (objeto, identificador) {
                return $http.get('http://localhost:8081/blogbuster/json?ob=' + objeto + '&op=get&id=' + identificador);
            },
            ajaxUpdate: function (objeto, parametros) {
                return $http({
                    method: "GET",
                    data: parametros,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    url: 'http://localhost:8081/blogbuster/json?ob=' + objeto + '&op=update'
                })
                //return $http.get('http://localhost:8081/blogbuster/json?ob=' + objeto + '&op=update', parametros);
            },
            ajaxLogin: function (username, password) {
                return $http.get('http://localhost:8081/blogbuster/json?ob=usuario&op=login&username=' + username + '&password=' + password);
            },
            ajaxLogout: function () {
                return $http.get('http://localhost:8081/blogbuster/json?ob=usuario&op=logout');
            },
            ajaxCheck: function () {
                return $http.get('http://localhost:8081/blogbuster/json?ob=usuario&op=check');
            }
        }
    }])
