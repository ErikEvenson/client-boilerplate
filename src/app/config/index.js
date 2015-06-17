require('angular-ui-router');

angular.module('app')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app.home.html'
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
  }]);

angular.module('app')
  .config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('!');
  }]);

// Solves a Facebook OAuth issue...
if (window.location.hash === '#_=_') window.location.hash = '#!';
