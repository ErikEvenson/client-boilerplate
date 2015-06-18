require('../services/usersService');

angular.module('eee-users')
  .controller(
    'UsersController',
    function ($scope, UsersService) {
      var init = function () {
        $scope.users = UsersService.getUsers();
      };

      init();
    }
  );