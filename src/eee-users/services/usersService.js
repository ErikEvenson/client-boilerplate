var _ = require('lodash');

angular.module('eee-users')
  .factory('UsersService', function($http, Group, User) {
    var apiUrl = '/api';
    var service = {};
    var groups = [];
    var users = [];

    var mapFromServer = function(user) {
      return new User(user);
    };

    service.createUser = function(user) {
      return $http.post(apiUrl + '/users', user)
        .then(function(res) {
          return mapFromServer(user);
        });
    };

    service.deleteUser = function(user) {
      var username = user.username;
      return $http.delete(apiUrl + '/users/' + username);
    };

    service.getGroups = function() {
      return groups;
    };

    service.newUser = function(user) {
      return new User(user);
    };

    service.updateUser = function(user) {
      var username = user.username;

      return $http.post(apiUrl + '/users/' + username, user)
        .then(function(res) {
          user = res.data;
          return mapFromServer(user);
        });
    };

    service.getUser = function(options) {
      var username = options.username;

      return $http.get(apiUrl + '/users/' + username)
        .then(function(res) {
          user = res.data;
          return mapFromServer(user);
        });
    };

    service.getUsers = function() {
      return $http.get(apiUrl + '/users')
        .then(function(res) {
          var users = res.data;
          return _.map(users, mapFromServer);
        });
    };

    return service;
  });
