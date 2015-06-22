angular.module('eee-auth')
  .config(function($httpProvider, AuthInterceptorProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  });

angular.module('eee-auth')
  .config(function($stateProvider) {
    // Auth
    var login = {
      controller: 'LoginController',
      name: 'login',
      parent: 'content',
      // template: '<p>XXXXX</p>',
      url: '/login'
    };

    var registration = {
      controller: 'RegistrationController',
      name: 'registration',
      parent: 'main',
      templateUrl: 'eee-auth.registration.html',
      url: '/registration'
    };

    var registrationConfirmation = {
      name: 'registrationConfirmation',
      parent: 'main',
      templateUrl: 'eee-auth.registrationConfirmation.html',
      url: '/registrationConfirmation'
    };

    $stateProvider
      .state(login)
      .state(registration)
      .state(registrationConfirmation);
  });

angular.module('eee-auth')
  .run(function($rootScope, $state){
    $rootScope.$on('unauthorized', function(error) {
      console.log("unauthorized", error);
      $state.go('login');
      // ifs for errors...
      // $state.go('404');
    });
  });
