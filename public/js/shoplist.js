angular.module('shoplist')
    .controller('list', function($http, $scope) {
        $http.get('/lista').success(
            function(retorno){
                $scope.lista = retorno.lista;
            }
        );
        
        function newItem() {
            this.item = '';
            this.quantidade = 0;
        }
        
        $scope.newItem = newItem();

        $scope.addItem = function() {
            $http.post('/add', $scope.newItem)
            .then(function successCallback(resposta){
                $scope.lista.push(resposta.data);        
                $scope.newItem = newItem();   
            });
        }
    }
);
