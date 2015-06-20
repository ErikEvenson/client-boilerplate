angular.module('eee-users')
  .config(function($stateProvider) {
    // Groups
    var groupsRoot = {
      abstract: true,
      name: 'groupsRoot',
      parent: 'content',
      template: '<ui-view/>',
      url: '/groups'
    };

    var groups = {
      name: 'groups',
      parent: groupsRoot,
      template: 'GROUPS LIST',
      url: ''
    };

    var group = {
      name: 'group',
      parent: groupsRoot,
      template: 'GROUPS DETAIL',
      url: '/:groupId'
    };

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
      .state(groupsRoot)
      .state(groups)
      .state(group)
      .state(usersRoot)
      .state(users)
      .state(newUser)
      .state(user);
  });
