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
    { id: 1, nome: 'Escola 1', bairro: 'Bairro: Taquaral', pontuacao: '5.0', image: 'http://www.shanebear.com/Projetos/images-hackaton/escola-demo.jpg' },
    { id: 2, nome: 'Escola 1', bairro: 'Bairro: Parque Imperador', pontuacao: '5.0', image: 'http://www.shanebear.com/Projetos/images-hackaton/escola-2.jpg' },
    { id: 3, nome: 'Escola 1', bairro: 'Bairro: Cambui', pontuacao: '5.0', image: 'http://www.shanebear.com/Projetos/images-hackaton/escola-3.jpg' },
    { id: 4, nome: 'Escola 1', bairro: 'Bairro: Ponte Preta', pontuacao: '5.0', image: 'http://www.shanebear.com/Projetos/images-hackaton/escola-4.jpg' },    
  ];

})

.controller('Profile', function($scope, $stateParams) {  
  $scope.dados = [
    { id: 1, nome: 'Tony Stark', telefone: '(19) 3254-4458', email: 'tonystark@stark.com', image: 'http://www.shanebear.com/Projetos/images-hackaton/avatar.png' }   
  ];

})

.controller('Memo', function($scope, $stateParams) {
  $scope.dados = [
    { id: 1, titulo: 'Início das aulas', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus debitis dolorem non pariatur accusamus hic! Impedit, obcaecati, aliquam ab tenetur saepe consequuntur deserunt autem officiis. Alias, incidunt, nemo. Nam, id.' }
  ];
})

.controller('SchoolPerfil', function($scope, $stateParams) {
  $scope.dados = [    
    { id: 1, nome: 'COTIL - Colégio Técnico de Limeira', image: 'http://www.shanebear.com/Projetos/images-hackaton/escola-demo.jpg', nota: '5', telefone: '3256-2546', localizacao: 'Rua Marcos Castro, 2200, Ouro Verde', descricao: 'O Colégio Técnico de Limeira - COTIL, da Universidade Estadual de Campinas, foi criado pela Lei Estadual no 7.655, de 28 de dezembro de 1962, e autorizado a ser instalado e a entrar em funcionamento pela Resolução C.E.E. no 46/66 e Deliberação C.E.E. no 12/70, Diário Oficial de 29/01/72, página 21.' }   
  ];

  $scope.mural = [    
    { id: 1, aviso: 'Início das aulas', texto: 'Olá alunos, gostariamos de comunicar que este ano daremos início em nossas atividades na primeira semana de fevereiro. Estejam preparados!' },
    { id: 2, aviso: 'Viagem escolar', texto: 'Viagem para as cataratas de Foz do Iguaçu em março.' }      
  ];

  $scope.comments = [    
    { id: 1, nome: 'Amanda', image: 'http://www.shanebear.com/Projetos/images-hackaton/avatar-female.png', texto: 'A qualidade de ensino de minha escola é excelente, porém gostaria que fosse adicionado a grade curricular aulas de teatro.' },
    { id: 2, nome: 'Carolina', image: 'http://www.shanebear.com/Projetos/images-hackaton/avatar-female.png', texto: 'Gosto bastante dos professores, o laboratório de química da escola é bastante interessante.' }      
  ];
})

.controller('MapCtrl', function($scope, $compile) { //$ionicLoading,
function initialize() {
    var myLatlng = new google.maps.LatLng(-22.8985515,-47.0631356);
    
    var mapOptions = {
      center: myLatlng,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);
    
    //Marker + infowindow + angularjs compiled ng-click
    var contentString = "<div><a ng-click='clickTest()'><h4>CEI São João Batista</h4><br /><p><i class='ion-android-star stars'></i><i class='ion-android-star stars'></i><i class='ion-android-star stars'></i><i class='ion-android-star stars'></i></p><br /><p>Mais informações sobre esta instituição de ensino.</p></a></div>";
    var compiled = $compile(contentString)($scope);

    var infowindow = new google.maps.InfoWindow({
      content: compiled[0]
    });


    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Escola'
    });

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(-22.902544,-47.0620757),
      map: map,
      title: 'Escola'
    });

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(-22.902544,-47.0820757),
      map: map,
      title: 'Escola'
    });

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(-22.902544,-47.0920757),
      map: map,
      title: 'Escola'
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
      content: 'Getting current location...',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function(pos) {
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
    }, function(error) {
      alert('Unable to get location: ' + error.message);
    });
  };
  
  $scope.clickTest = function() {
    //alert('Example of infowindow with ng-click')
    location.href="#/app/schoolperfil";
  };
      
});

function showSearchMap() {  
  $('#search-menu').toggle('fast');
}