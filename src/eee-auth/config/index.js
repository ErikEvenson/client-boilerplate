// angular.module('eee-auth')
//   .config(function($httpProvider, AuthInterceptorProvider) {
//     $httpProvider.interceptors.push('AuthInterceptor');
//   });

angular.module('eee-auth')
  .config(function($stateProvider) {
    // Auth
    var authRoot = {
      abstract: true,
      name: 'authRoot',
      parent: 'main',
      template: '<ui-view/>',
      url: '/auth'
    };

    var login = {
      controller: 'LoginController',
      name: 'login',
      parent: authRoot,
      templateUrl: 'eee-auth.login.html',
      url: '/login'
    };

    var registration = {
      controller: 'RegistrationController',
      name: 'registration',
      parent: authRoot,
      templateUrl: 'eee-auth.registration.html',
      url: '/registration'
    };

    var registrationActivation = {
      controller: 'RegistrationActivation',
      name: 'registrationActivation',
      parent: authRoot,
      resolve: {
        registration: function($stateParams, AuthService) {
          return AuthService.Registrations
            .get({token: $stateParams.token});
        }
      },
      templateUrl: 'eee-auth.registrationActivation.html',
      url: '/registrationActivation/:token'
    };

    var registrationConfirmation = {
      name: 'registrationConfirmation',
      parent: authRoot,
      templateUrl: 'eee-auth.registrationConfirmation.html',
      url: '/registrationConfirmation'
    };

    $stateProvider
      .state(authRoot)
      .state(login)
      .state(registration)
      .state(registrationActivation)
      .state(registrationConfirmation);
  });

angular.module('eee-auth')
  .config(function (localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('eee-auth')
      .setNotify(true, true)
  });

angular.module('eee-auth')
  .run(function($rootScope, $state){
    $rootScope.$on('unauthorized', function(error) {
      $state.go('login');
    });
  });

angular.module('eee-auth').run(function(AuthService){
    AuthService.useTokenFromCache();
});
