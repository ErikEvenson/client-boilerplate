require('angular');

angular.module('app')
  .controller(
    'MainController',
    function($scope, $location) {
      if (!$scope.user) $location.path('/users/login');
    }
  );
