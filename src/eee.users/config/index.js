angular.module('eee.users')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('users', {
        url: '/users',
        views: {
          '': {
            controller: 'MainController',
            templateUrl: 'app.home.html'
          },
          'topNav@users': {
            controller: 'TopNavController',
            templateUrl: 'app.home.topNav.html'
          },
          'leftNav@users': {
            controller: 'LeftNavController',
            templateUrl: 'app.home.leftNav.html'
          },
          'content@users': {
            // controller: 'UsersController',
            template: 'USERS'
          }
        }
      })
  });
