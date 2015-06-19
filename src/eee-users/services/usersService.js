var _ = require('lodash');

angular.module('eee-users')
  .factory('UsersService', function($http, Group, User) {
    var service = {};
    var groups = [];
    var users = [];

    service.getGroups = function() {
      return groups;
    };

    service.addUser = function(user) {
      otherUser = _.find(users, {username: user.username});

      if (user.username && !otherUser) {
        users.push(angular.copy(user));
        return user;
      }
    };

    service.updateUser = function(user) {
      var index = _.findIndex(users, {username: user.username});
      users[index] = angular.copy(user);
      return user;
    };

    service.getUser = function(options) {
      var user = _.find(users, options);
      return angular.copy(user);
    };

    service.getUsers = function() {
      return angular.copy(users);
    };

    // service.getUsers = function() {
    //   var collectionsUrl = 'http://localhost/api';
    //   return $http.get(collectionsUrl + '/users');
    // };

    var setupInitialGroups = function() {
      groups.push(new Group({
        name: 'group 1'
      }));

      groups.push(new Group({
        name: 'group 2'
      }));
    };

    var setupInitialUsers = function() {
      users.push(new User({
        email: 'erik.e.evenson@gmail.com',
        name: {
          first: 'Erik',
          last: 'Evenson'
        },
        username: 'eevenson'
      }));

      users.push(new User({
        email: 'joe.doe@example.com',
        name: {
          first: 'Joe',
          last: 'Doe'
        },
        username: 'jdoe'
      }));
    };

    var init = function() {
      setupInitialGroups();
      setupInitialUsers();
    };

    init();

    return service;
  });
