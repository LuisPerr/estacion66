app.controller("AdminCtrl", ["$scope", "$location","filterFilter", function($scope, $location, filterFilter) {
    try{
        // $scope.DataUser     = JSON.parse( localStorage.getItem("RCVUserData") );
        // $scope.currentUser  = $scope.DataUser.usu_nombre;
        // $scope.idCatalogoUsuario = $scope.DataUser.idCatalogoUsuario;
        // $scope.btnDescargar = true;

        // if( $location.path() == '/enlaces/descargar'){
        //     $scope.btnDescargar = false;
        // }
    }
    catch( e ){
        $location.path("/login");
    }

    $scope.closeSession = function(){
        $location.path("/login");
    }






    
    $scope.pnlConocenos = function(){
        $location.path("/enlaces/conocenos");
        $scope.hideMenu();
        $scope.btnDescargar = true;
    }

    $scope.pnlAyuda = function(){
        $location.path("/enlaces/ayuda");
        $scope.hideMenu();
    }

    $scope.descargar = function(){
        $location.path("/enlaces/descargar");
        $scope.btnDescargar = false;
        $scope.hideMenu();
    }

    $scope.pnlNoticias = function(){
        $scope.btnDescargar = true;
        if( window.location.hash == '#/enlaces/home' ){
            location.reload();            
        }
        else{
            $location.path("/enlaces/home");
            $scope.hideMenu();
        }
    }

    $scope.pnlFavoritos = function(){
        $scope.btnDescargar = true;
        $location.path("/enlaces/favoritos");
        $scope.hideMenu();
    }

    $scope.pnlVer = function(){
        $scope.btnDescargar = true;
        $location.path("/enlaces/perfil");
        $scope.hideMenu();
    }

    $scope.pnlEditar = function(){
        $scope.btnDescargar = true;
        $location.path("/enlaces/editarperfil");
        $scope.hideMenu();
    }

    $scope.pnlCambiar = function(){
        $scope.btnDescargar = true;
        $location.path("/enlaces/cambiarpassword");
        $scope.hideMenu();
    }

    $scope.close = function(){
        $scope.btnDescargar = true;
    	localStorage.setItem("RCVUserData", "");
        $scope.hideMenu();
    	$location.path("/login");
    }

    $scope.showMenu = function () {
        $(".menu-wrap").css('display','block');
        $(".vertical-menu").animate({
            marginLeft: '0px'
        }, 500);
    }

    $scope.hideMenuParent = function(e){
        if (!e.target.classList.contains('menu-wrap'))
            return;  
        $scope.hideMenu();
    }

    $scope.hideMenu = function () {
        $(".vertical-menu").animate({
            marginLeft: '-280px'
        }, 500);
        setTimeout(function() {
            $(".menu-wrap").fadeOut();
        }, 500);
        
    }

    setTimeout(function(){
        $(".loading").fadeOut();
    },500)
}]);