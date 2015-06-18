require('angular-ui-router');

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
      .state('home.about', {
        url: '/about',
        views: {
            // the main template will be placed here (relatively named)
            '': { templateUrl: 'app.about.html' },

            // the child views will be defined here (absolutely named)
            'columnOne@home.about': { template: 'Look I am a column 1!' },

            // for column two, we'll define a separate controller 
            'columnTwo@home.about': { template: 'Look I am a column 2!' }
        }
      });
  });

angular.module('app')
  .config(function($locationProvider) {
    $locationProvider.hashPrefix('!');
  });

// Solves a Facebook OAuth issue...
if (window.location.hash === '#_=_') window.location.hash = '#!';
