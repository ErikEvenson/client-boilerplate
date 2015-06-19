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
    function($scope, user, UsersService) {
      $scope.user = angular.copy(user);

      $scope.save = function() {
        if ($scope.userForm.$invalid) return;
        UsersService.updateUser($scope.user);
        $scope.user = angular.copy($scope.user);
        $scope.userForm.$setPristine();
      };

      // $scope.$watch('email', function(newValue, oldValue) {
      //   console.log("XXX", newValue, oldValue);
      // });
    }
  );
