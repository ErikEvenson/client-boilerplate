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
      name:'users',
      parent: usersRoot,
      templateUrl: 'eee-users.users.html',
      url: ''
    }

    var newUser = {
      name:'newUser',
      parent: usersRoot,
      template: 'NEW USER',
      url: '/new'
    }

    var editUser = {
      name:'editUser',
      parent: usersRoot,
      template: 'EDIT USER',
      url: '/:username/edit'
    }

    var user = {
      name:'user',
      parent: usersRoot,
      template: 'USERS DETAIL',
      url: '/:username'
    }

    $stateProvider
      .state(groupsRoot)
      .state(groups)
      .state(group)
      .state(usersRoot)
      .state(users)
      .state(newUser)
      .state(editUser)
      .state(user);
  });
