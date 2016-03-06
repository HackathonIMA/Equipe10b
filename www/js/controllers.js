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
   
})

.controller('Config', function($scope, $stateParams) {
  
})

.controller('Ranking', function($scope, $stateParams) {
  
  $scope.items = [
    { id: 1, nome: 'Escola 1', bairro: 'Bairro: x', pontuacao: '5.0', image: '../img/escola-demo.jpg' },
    { id: 2, nome: 'Escola 1', bairro: 'Bairro: x', pontuacao: '5.0', image: '../img/escola-demo.jpg' },
    { id: 3, nome: 'Escola 1', bairro: 'Bairro: x', pontuacao: '5.0', image: '../img/escola-demo.jpg' },
    { id: 4, nome: 'Escola 1', bairro: 'Bairro: x', pontuacao: '5.0', image: '../img/escola-demo.jpg' },    
  ];

})

.controller('Profile', function($scope, $stateParams) {  
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

  $scope.comments = [    
    { id: 1, nome: 'Amanda', image: '../img/avatar-female.png', texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio temporibus similique atque eaque veniam mollitia aliquam illo dolor tempora animi nesciunt rerum, quod sed, magnam officiis reprehenderit, consequuntur qui saepe.' },
    { id: 2, nome: 'Carolina', image: '../img/avatar-female.png', texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio temporibus similique atque eaque veniam mollitia aliquam illo dolor tempora animi nesciunt rerum, quod sed, magnam officiis reprehenderit, consequuntur qui saepe.' }      
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