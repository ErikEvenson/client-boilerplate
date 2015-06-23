angular.module('app')
  .config(function($httpProvider) {
    // AppInterceptorProvider.setApiKey('something');
    $httpProvider.interceptors.push('AppInterceptor');
  });

angular.module('app')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    var main = {
      abstract: true,
      controller: 'MainController',
      name: 'main',
      templateUrl: 'app.main.html'
    };

    var http404 = {
      name: 'http404',
      parent: main,
      templateUrl: 'app.http404.html',
      url: '/notFound'
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
      .state(http404)
      .state(content)
      .state(home);
  });

angular.module('app')
  .config(function($locationProvider) {
    $locationProvider.hashPrefix('!');
  });

// Solves a Facebook OAuth issue...
if (window.location.hash === '#_=_') window.location.hash = '#!';
