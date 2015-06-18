angular.module('app')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    var main = {
      controller: 'MainController',
      name: 'main',
      templateUrl: 'app.main.html'
    };

    var content = {
      controller: 'ContentController',
      name: 'content',
      parent: main,
      templateUrl: 'app.content.html'
    };

    var home = {
      name: 'home',
      parent: content,
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
