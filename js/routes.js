angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.iNICIO', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/iNICIO.html',
        controller: 'iNICIOCtrl'
      }
    }
  })

  .state('cart', {
    url: '/page2',
    templateUrl: 'templates/cart.html',
    controller: 'cartCtrl'
  })

  .state('menu.configuracion', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/configuracion.html',
        controller: 'configuracionCtrl'
      }
    }
  })

  .state('cloud', {
    url: '/page3',
    templateUrl: 'templates/cloud.html',
    controller: 'cloudCtrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.login', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('menu.sAPBASIS', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sAPBASIS.html',
        controller: 'sAPBASISCtrl'
      }
    }
  })

  .state('menu.bASISListadoDeUsuario', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bASISListadoDeUsuario.html',
        controller: 'bASISListadoDeUsuarioCtrl'
      }
    }
  })

  .state('menu.acercaDe', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acercaDe.html',
        controller: 'acercaDeCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});