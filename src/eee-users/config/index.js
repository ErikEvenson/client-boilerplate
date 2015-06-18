angular.module('eee-users')
  .config(function($stateProvider) {
    var groupsRoot = {
      abstract: true,
      name: 'groupsRoot',
      parent: 'content',
      template: '<ui-view/>',
      url: '/groups'
    };

    var groups = {
      name:'groups',
      parent: groupsRoot,
      template: 'GROUPS LIST',
      url: ''
    }

    var group = {
      name:'group',
      parent: groupsRoot,
      template: 'GROUPS DETAIL',
      url: '/:groupId'
    }

    var usersRoot = {
      abstract: true,
      name: 'usersRoot',
      parent: 'content',
      template: '<ui-view/>',
      url: '/users'
    };

    var users = {
      // controller: 'UsersController',
      name:'users',
      parent: usersRoot,
      templateUrl: 'eee-users.users.html',
      url: ''
    }

    var user = {
      name:'user',
      parent: usersRoot,
      template: 'USERS DETAIL',
      url: '/:userId'
    }

    $stateProvider
      .state(groupsRoot)
      .state(groups)
      .state(group)
      .state(usersRoot)
      .state(users)
      .state(user);
  });
