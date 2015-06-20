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
    function($scope, $state, user, UsersService) {
      $scope.user = user;

      $scope.delete = function() {
        if ($scope.user.id) {
          UsersService.deleteUser($scope.user)
            .then(function() {
              return $state.go('users');
            });

        } else {
          return $state.go('users');
        }
      };

      $scope.save = function() {
        if ($scope.userForm.$invalid) return;

        if ($scope.user.id) {
          UsersService.updateUser($scope.user)
            .then(function(user) {
              $scope.userForm.$setPristine();
              return user;
            });

        } else {
          UsersService.createUser($scope.user)
            .then(function(user) {
              $state.go('user', {username: user.username});
              return user;
            });
        }
      };

      // $scope.$watch('email', function(newValue, oldValue) {
      //   console.log("XXX", newValue, oldValue);
      // });
    }
  );
