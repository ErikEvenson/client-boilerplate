require('angular');

angular.module('app')
  .controller(
    'MainController',
    ['$scope', '$location',
      function($scope, $location) {
        if (!$scope.user) $location.path('/users/login');
      }
    ]
  );
