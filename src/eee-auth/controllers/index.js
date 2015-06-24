var
  async = require('async');

angular.module('eee-auth')
  .controller(
    'LoginController',
    function($scope, AuthService) {
      $scope.login = function(username, password) {
        if ($scope.form.$invalid) return;
        AuthService.login(username, password)
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

      $scope.submit = function() {
        if ($scope.registrationForm.$invalid) return;

        async.parallel(
          [
            function(cb) {
              $scope.user.$save().then(function() {
                cb();
              });
            },
            function(cb) {
              $scope.registration.username = $scope.user.username;
              $scope.registration.$save().then(function() {
                cb();
              });
            }
          ],
          function(err, results) {
            $state.go('registrationConfirmation');
          }
        );
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
    function($scope, $stateParams, AuthService, registration) {
      $scope.registration = registration;
    }
  );
