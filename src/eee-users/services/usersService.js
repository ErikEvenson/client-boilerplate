require('angular');

angular.module('eee-users')
  .factory('UsersService', function(Groups, Users) {
    var service = {};
    var groups = {};
    var users = {};

    service.getGroups = function() {};
    service.getUsers = function() {};

    return service;
  });
