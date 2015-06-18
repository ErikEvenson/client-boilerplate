angular.module('eee.users')
  .config(function($stateProvider) {
    var users = {
      name: 'users',
      parent: 'content',
      template: 'eee.users.index.html',
      url: '/users'
    };

    $stateProvider
      .state(users);
  });
