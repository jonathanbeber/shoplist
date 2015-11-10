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
            if($scope.newItem._id){
                $http.put('/update', $scope.newItem)
                .then(function successCallback(resposta){
                    $scope.newItem = newItem();   
                });
            } else {
                $http.post('/add', $scope.newItem) 
                .then(function successCallback(resposta){
                    $scope.lista.push(resposta.data);        
                    $scope.newItem = newItem();   
                });
            }
        }
        $scope.loadItem = function(item){
            $scope.newItem = item;
        }
        $scope.removeItem = function(item){
            $http.delete('/remove/' + item._id)
            .then(function successCallback(resposta){
                var index = $scope.lista.indexOf(item);
			    $scope.lista.splice(index, 1);
			    console.log(resposta);
            });
        }
    }
);
