var
  angular = require('angular');

angular.module('eee.users')
  .controller(
    'LoginController',
    function($scope, $location, $rootScope) {
      $scope.login = function() {
        $rootScope.user = {};
        $location.path('/');
      };
    }
  );
