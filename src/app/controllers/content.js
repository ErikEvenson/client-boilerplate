require('angular');

angular.module('app')
  .controller(
    'ContentController',
    function($scope) {
      $scope.navigations = [
        {
          state: 'groups',
          title: 'Groups'
        },
        {
          state: 'users',
          title: 'Users'
        }
      ]
    }
  );
