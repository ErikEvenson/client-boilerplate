require('angular');

angular.module('app')
  .controller(
    'TopNavController',
    function($scope) {
      $scope.brand = 'Boilerplate';
    }
  );
