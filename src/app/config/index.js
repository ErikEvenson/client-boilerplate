require('angular-ui-router');

angular.module('app')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app.home.html'
      })
      .state('home.list', {
        url: '/list',
        templateUrl: 'app.home.list.html',
        controller: function($scope) {
          $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        }
      })
      .state('home.paragraph', {
        url: '/paragraph',
        template: 'I could sure use a drink right now.'
      })
      .state('about', {
        // TBD
      });
  }]);

angular.module('app')
  .config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('!');
  }]);

// Solves a Facebook OAuth issue...
if (window.location.hash === '#_=_') window.location.hash = '#!';
