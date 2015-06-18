angular.module('eee.users')
  .config(function($stateProvider) {
    var groups = {
      name: 'groups',
      parent: 'content',
      template: 'eee.users.groups.html',
      url: '/groups'
    };

    var users = {
      name: 'users',
      parent: 'content',
      template: 'eee.users.users.html',
      url: '/users'
    };

    $stateProvider
      .state(groups)
      .state(users);
  });
