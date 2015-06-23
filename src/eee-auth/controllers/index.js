angular.module('eee-auth')
  .controller(
    'LoginController',
    function($modal, $scope) {
      var dialog = $modal.open({
        // backdrop: false,
        controller: 'LoginInstanceController',
        templateUrl: 'eee-auth.login.html',
        scope: $scope.$new(true),
        size: 'lg'
        // windowTemplateUrl: null
      }).result['finally'](function() {
        console.log("FINALLY");
      });
    }
  )
  .controller(
    'LoginInstanceController',
    function($scope, $modalInstance) {

    }
  )
  .controller(
    'RegistrationController',
    function($scope, $state, $stateParams, UsersService) {
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

        $scope.user.$save()
          .then(function() {
            return $state.go('registrationConfirmation');
          });
      };

      $scope.uniqueUsername = function(username) {
        if (!username || username === $stateParams.username) return $q.when(true);
        return UsersService.uniqueUsername(username);
      };

      $scope.user = new UsersService.Users({isActive: false});
    }
  )
  .controller(
    'RegistrationActivation',
    function($scope, $stateParams, AuthService, registration) {
      $scope.registration = registration;
    }
  );
