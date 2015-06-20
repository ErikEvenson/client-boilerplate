var _ = require('lodash');

angular.module('eee-users')
  .factory('UsersService', function($http, $resource) {
    var apiUrl = '/api';
    var service = {};
    var apiVersion = '/v1';

    service.Users = $resource(
      apiUrl + apiVersion + "/users/:username", {}, {update: {method: 'PUT'}}
    );

    return service;
  });
