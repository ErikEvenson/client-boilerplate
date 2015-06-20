require('../services/usersService');

angular.module('eee-users')
  .controller(
    'UsersController',
    function($scope, UsersService) {
      $scope.users = UsersService.Users.query()
    }
  )
  .controller(
    'UserController',
    function($scope, $state, $stateParams, UsersService) {
      if ($stateParams.username) {
        UsersService.Users
          .get({username: $stateParams.username}, function(user) {
            $scope.user = user;
          });
      } else {
        $scope.user = new UsersService.Users();
      }

      $scope.delete = function() {
        if ($scope.user.id) {
          $scope.user.$delete({username: $scope.user.username})
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
          $scope.user.$update({username: $scope.user.username})
            .then(function() {
              $scope.userForm.$setPristine();
            });
        } else {
          $scope.user.$save()
            .then(function() {
              return $state.go('user', {username: $scope.user.username});
            });
        }
      };
    }
  );
