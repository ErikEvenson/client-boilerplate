angular.module('eee-users')
  .config(function($stateProvider) {
    // Users
    var usersRoot = {
      abstract: true,
      name: 'usersRoot',
      parent: 'content',
      template: '<ui-view/>',
      url: '/users'
    };

    var users = {
      controller: 'UsersController',
      name: 'users',
      parent: usersRoot,
      templateUrl: 'eee-users.users.html',
      url: ''
    };

    var newUser = {
      controller: 'UserController',
      name: 'newUser',
      parent: usersRoot,
      templateUrl: 'eee-users.user.html',
      url: '/new'
    };

    var user = {
      controller: 'UserController',
      name: 'user',
      parent: usersRoot,
      templateUrl: 'eee-users.user.html',
      url: '/:username'
    };

    $stateProvider
      .state(usersRoot)
      .state(users)
      .state(newUser)
      .state(user);
  });
