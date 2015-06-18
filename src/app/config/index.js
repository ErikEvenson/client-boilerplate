angular.module('app')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        controller: 'MainController',
        templateUrl: 'app.home.html'
      })
      .state('home.content', {
        controller: 'ContentController',
        templateUrl: 'app.home.content.html'
      })
      .state('home.content.default', {
        // controller: ''
        templateUrl: 'app.home.content.default.html',
        url: '/'
      })
      .state('home.content.users', {
        // controller: ''
        template: 'app.home.content.users.html',
        url: '/users'
      });      
  });

angular.module('app')
  .config(function($locationProvider) {
    $locationProvider.hashPrefix('!');
  });

// Solves a Facebook OAuth issue...
if (window.location.hash === '#_=_') window.location.hash = '#!';
