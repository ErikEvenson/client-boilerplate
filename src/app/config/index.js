angular.module('app')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        views: {
          '': {
            controller: 'MainController',
            templateUrl: 'app.home.html'
          },
          'topNav@home': {
            controller: 'TopNavController',
            templateUrl: 'app.home.topNav.html'
          },
          'leftNav@home': {
            controller: 'LeftNavController',
            templateUrl: 'app.home.leftNav.html'
          },
          'content@home': {
            controller: 'ContentController',
            templateUrl: 'app.home.content.html'
          }
        }
      })
  });

angular.module('app')
  .config(function($locationProvider) {
    $locationProvider.hashPrefix('!');
  });

// Solves a Facebook OAuth issue...
if (window.location.hash === '#_=_') window.location.hash = '#!';
