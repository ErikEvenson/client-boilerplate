// angular.module('app')
//   .config(function($httpProvider, InterceptorProvider) {
//     InterceptorProvider.setApiKey('something');
//     $httpProvider.interceptors.push('Interceptor');
//   });

angular.module('app')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    var main = {
      abstract: true,
      controller: 'MainController',
      name: 'main',
      templateUrl: 'app.main.html'
    };

    var content = {
      abstract: true,
      controller: 'ContentController',
      name: 'content',
      parent: main,
      templateUrl: 'app.content.html'
    };

    var home = {
      name: 'home',
      parent: main,
      templateUrl: 'app.home.html',
      url: '/home'
    };

    $stateProvider
      .state(main)
      .state(content)
      .state(home);
  });

angular.module('app')
  .config(function($locationProvider) {
    $locationProvider.hashPrefix('!');
  });

// Solves a Facebook OAuth issue...
if (window.location.hash === '#_=_') window.location.hash = '#!';

// angular.module('app')
//   .run(function($rootScope, $state){
//     $rootScope.$on('$stateChangeError', function(e, toState, toParams, fromState, fromParams, error) {
//       console.log("STATE CHANGE ERROR");
//       // ifs for errors...
//       // $state.go('404');
//     });

//     $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
//       console.log('STATE CHANGE START');
//       // check auth...
//       // http://www.slideshare.net/christophercaplinger/architecture-auth-and-routing-with-uirouter
//     });

//     $rootScope.$on('$stateChangeSuccess', function(e, toState, toParams, fromState, fromParams) {
//       console.log('STATE CHANGE SUCCESS');
//       // check auth...
//       // http://www.slideshare.net/christophercaplinger/architecture-auth-and-routing-with-uirouter
//     });

//     $rootScope.$on('$stateNotFound', function(e, unFoundState, fromState, fromParams) {
//       console.log('STATE NOT FOUND');
//       // check auth...
//       // http://www.slideshare.net/christophercaplinger/architecture-auth-and-routing-with-uirouter
//     });
//   });
