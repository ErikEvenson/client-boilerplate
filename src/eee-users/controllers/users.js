require('../services/usersService');

angular.module('eee-users')
  .controller(
    'UsersController',
    function ($scope, UsersService) {
      // $scope.goto = function (exercise) {
      //     $location.path('/builder/exercises/' + exercise.name);
      // }

      var init = function () {
        $scope.users = UsersService.getUsers();
      };

      init();
    }
  );