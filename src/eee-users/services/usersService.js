var _ = require('lodash');

angular.module('eee-users')
  .factory('UsersService', function($http, $resource, User) {
    var apiUrl = '/api';
    var service = {};

    service.Users = $resource(
      apiUrl + "/users/:username", {}, {update: {method: 'PUT'}}
    );

    // var mapFromServer = function(user) {
    //   return new User(user);
    // };

    service.getNewUser = function(user) {
      return new User(user);
    };

    return service;
  });
