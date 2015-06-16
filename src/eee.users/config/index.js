require('angular-resource');
require('angular-route');

angular.module('eee.users')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/users/login', {
        controller: 'LoginController',
        templateUrl: 'eee.users.login.html'
      })
    }]);
