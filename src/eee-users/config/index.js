angular.module('eee-users')
  .config(function($httpProvider, AuthInterceptorProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  });

angular.module('eee-users')
  .config(function($stateProvider) {
    // Auth
    var login = {
      controller: 'LoginController',
      name: 'login',
      parent: 'content',
      // template: '<p>XXXXX</p>',
      url: '/login'
    };

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
      .state(login)
      .state(groupsRoot)
      .state(groups)
      .state(group)
      .state(usersRoot)
      .state(users)
      .state(newUser)
      .state(user);
  });

angular.module('eee-users')
  .run(function($rootScope, $state){
    $rootScope.$on('unauthorized', function(error) {
      console.log("unauthorized", error);
      $state.go('login');
      // ifs for errors...
      // $state.go('404');
    });
  });
