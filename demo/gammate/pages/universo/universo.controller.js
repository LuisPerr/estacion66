app.controller("UniversoCtrl", ["$scope", "$location","universoFactory", function($scope, $location, universoFactory) {
    // $(".view").css("background-image", "url(images/escenarios/universo.jpg)");
    $scope.Universos = [
        {IdUniverso: 1, NombreUniverso: 'FÍSICA', Img: 'fisica.png'},
        {IdUniverso: 2, NombreUniverso: 'MATEMÁTICAS', Img: 'matematicas.png'},
        {IdUniverso: 3, NombreUniverso: 'QUÍMICA', Img: 'quimica.png'}
    ];

    $scope.openMundo = function(){
        $location.path("/play/mundo");
        $scope.limpiaFondo('mundo');
    }

    $scope.limpiaFondo = function( escenario ){
        $(".view").removeClass("view-back-nivel");
        $(".view").removeClass("view-back-mundo");
        $(".view").removeClass("view-back-universo");

        $(".view").addClass("view-back-" + escenario);
    }
    $scope.limpiaFondo('universo');
}]);