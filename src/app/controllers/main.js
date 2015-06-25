angular.module('app')
  .controller(
    'MainController',
    function($scope, $state, AuthService) {
      $scope.brand = 'Boilerplate';
      $scope.logged = AuthService.logged;
      $scope.loggedUser = AuthService.loggedUser;

      $scope.logout = function() {
        AuthService.logout();
        $state.go('home');
      };
    }
  );
