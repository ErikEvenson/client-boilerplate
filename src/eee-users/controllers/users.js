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
      $scope.email = user.email;
      $scope.name = user.name;
      $scope.username = user.username;
    }
  );
