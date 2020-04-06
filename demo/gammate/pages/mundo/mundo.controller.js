app.controller("MundoCtrl", ["$scope", "$location","mundoFactory", function($scope, $location, mundoFactory) {
    

    $scope.Universos = [
        {IdUniverso: 1, NombreUniverso: 'FÍSICA', Img: 'fisica.png'},
        {IdUniverso: 2, NombreUniverso: 'MATEMÁTICAS', Img: 'matematicas.png'},
        {IdUniverso: 3, NombreUniverso: 'QUÍMICA', Img: 'quimica.png'}
    ];

    $scope.backUniverso = function(){
        $location.path("/play/universo");
        $scope.limpiaFondo('universo');
    }

    $scope.openNivel = function(){
        $location.path("/play/nivel");
        $scope.limpiaFondo('nivel');
    }

    $scope.limpiaFondo = function( escenario ){
        $(".view").removeClass("view-back-nivel");
        $(".view").removeClass("view-back-mundo");
        $(".view").removeClass("view-back-universo");

        $(".view").addClass("view-back-" + escenario);
    }
    $scope.limpiaFondo('mundo');
}]);