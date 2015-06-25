var
  async = require('async');

angular.module('eee-auth')
  .controller(
    'LoginController',
    function($scope, $state, AuthService) {
      $scope.$on('eee-auth:success', function() {
        $state.go('home');
      });

      $scope.$on('eee-auth:failure', function() {
        console.log("auth:failure");
      });

      $scope.authenticate = function(username, password) {
        if ($scope.form.$invalid) return;
        AuthService.authenticate(username, password);
      };
    }
  )
  .controller(
    'RegistrationController',
    function($scope, $state, $stateParams, AuthService, UsersService) {
      // Prevent username checks that 404 from going to the http404 state
      $scope.$on('$stateChangeStart', function(
        event, toState, toParams, fromState, fromParams
      ) {
        if (toState.name === 'http404' && fromState.name === 'registration') {
          event.preventDefault();
        }
      });

      $scope.register = function() {
        if ($scope.registrationForm.$invalid) return;

        AuthService.register($scope.registration, $scope.user, function(err) {
          $state.go('registrationConfirmation');
        });
      };

      $scope.uniqueUsername = function(username) {
        if (!username || username === $stateParams.username) return $q.when(true);
        return UsersService.uniqueUsername(username);
      };

      $scope.registration = new AuthService.Registrations();
      $scope.user = new UsersService.Users({isActive: false});
    }
  )
  .controller(
    'RegistrationActivation',
    function($scope, $state, $stateParams, AuthService, registration) {
      $scope.registration = registration;

      $scope.activateAndLogin = function() {
        AuthService.activate($stateParams.token, function() {
          $state.go('login');
        });
      };
    }
  );
