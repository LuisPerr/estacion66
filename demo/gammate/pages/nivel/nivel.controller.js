app.controller("NivelCtrl", ["$scope", "$location","nivelFactory", function($scope, $location, nivelFactory) {
    

    $scope.backUniverso = function(){
        $location.path("/play/mundo");
        $scope.limpiaFondo('mundo');
    }

    $scope.limpiaFondo = function( escenario ){
        $(".view").removeClass("view-back-nivel");
        $(".view").removeClass("view-back-mundo");
        $(".view").removeClass("view-back-universo");

        $(".view").addClass("view-back-" + escenario);
    }
    $scope.limpiaFondo('nivel');
}]);