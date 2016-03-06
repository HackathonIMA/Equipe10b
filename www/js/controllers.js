angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('MapPageCtrl', function($scope) {
  /*$scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];*/  
})

.controller('Config', function($scope, $stateParams) {
  
})

.controller('Ranking', function($scope, $stateParams) {
  
  $scope.items = [
    { id: 1, nome: 'Escola 1', bairro: 'Bairro: x', pontuacao: '5', image: '' },
    { id: 2, nome: 'Escola 2', bairro: 'Bairro: x', pontuacao: '4', image: '' }, /* data:image/jpeg;base64,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*/
    { id: 3, nome: 'Escola 3', bairro: 'Bairro: x', pontuacao: '3', image: '' },
    { id: 4, nome: 'Escola 4', bairro: 'Bairro: x', pontuacao: '2', image: '' }
  ];

})

.controller('Profile', function($scope, $stateParams) {
  /*function hideSearchMenu() {  
    $('.btn-search').hide('fast');
  }
  hideSearchMenu();*/

  $scope.dados = [
    { id: 1, nome: 'Tony Stark', telefone: '(19) 3254-4458', email: 'tonystark@stark.com', image: '../img/avatar.png' }   
  ];

})

.controller('Memo', function($scope, $stateParams) {
  $scope.dados = [
    { id: 1, titulo: 'Início das aulas', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus debitis dolorem non pariatur accusamus hic! Impedit, obcaecati, aliquam ab tenetur saepe consequuntur deserunt autem officiis. Alias, incidunt, nemo. Nam, id.' }
  ];
})

.controller('SchoolPerfil', function($scope, $stateParams) {
  $scope.dados = [    
    { id: 1, nome: 'COTIL - Colégio Técnico de Limeira', image: '../img/escola-demo.jpg', nota: '5', telefone: '3256-2546', localizacao: 'Rua Marcos Castro, 2200, Ouro Verde', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores maxime, quisquam est tempora cupiditate, provident rem ipsam at aliquam perferendis fuga aliquid vel repudiandae deleniti, ducimus sit, libero atque non.' }   
  ];

  $scope.mural = [    
    { id: 1, aviso: 'Início das aulas', texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio temporibus similique atque eaque veniam mollitia aliquam illo dolor tempora animi nesciunt rerum, quod sed, magnam officiis reprehenderit, consequuntur qui saepe.' },
    { id: 2, aviso: 'Viagem escolar', texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio temporibus similique atque eaque veniam mollitia aliquam illo dolor tempora animi nesciunt rerum, quod sed, magnam officiis reprehenderit, consequuntur qui saepe.' }      
  ];
})

.controller('MapCtrl', function($scope, $ionicLoading, $compile, MapService) {
  function initialize() {
    var myLatlng = new google.maps.LatLng(-22.9246713,-47.0756226);
  
    MapService.GetPlaces()
    .success(function (response) {
       $ionicLoading.hide();
       $rootScope.userProfile = response;
       authService.SetUserProfileData(response);
       
    })
    .error(function (err) {
       $ionicLoading.hide();
      
    });
      






    var mapOptions = {
      center: myLatlng,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);
    
    //Marker + infowindow + angularjs compiled ng-click
    var contentString = "<div><a ng-click='clickTest()'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores hic, sequi suscipit odio ab atque. Ut ipsam atque ipsum fuga quasi, suscipit vero optio sit voluptatem. Aspernatur facilis recusandae obcaecati.!</a></div>";
    var compiled = $compile(contentString)($scope);

    var infowindow = new google.maps.InfoWindow({
      content: compiled[0]
    });

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Uluru (Ayers Rock)'
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });

    $scope.map = map;
  }
  google.maps.event.addDomListener(window, 'load', initialize);
  
  $scope.centerOnMe = function() {
    if(!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Procurando localização...',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function(pos) {
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
    }, function(error) {
      alert('Não foi possivel encontrar sua localização: ' + error.message);
    });
  };
  
  $scope.clickTest = function() {
    alert('Example of infowindow with ng-click')
  };  
  
});

function showSearchMap() {  
  $('#search-menu').toggle('fast');
}