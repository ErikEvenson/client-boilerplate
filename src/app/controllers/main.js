angular.module('app')
  .controller(
    'MainController',
    function($scope, $state, AuthService) {
      $scope.brand = 'Boilerplate';
      $scope.logged = AuthService.logged;

      $scope.logout = function() {
        AuthService.logout();
        $state.go('home');
      }

      $scope.loggedUser = AuthService.loggedUser;
    }
  );
