require('../services/usersService');

angular.module('eee-users')
  .controller(
    'UsersController',
    function($scope, users) {
      $scope.users = users;
    }
  )
  .controller(
    'UserController',
    function($scope, user) {
      $scope.title = user.username;
    }
  );