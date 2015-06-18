require('angular');

angular.module('eee-users')
  .factory('UsersService', function(Groups, Users) {
    var service = {};
    var groups = {};
    var users = {};

    service.getGroups = function() {};
    service.getUsers = function() {};

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

    var init = function () {
      setupInitialGroups();
      setupInitialUsers();
    };

    init();

    return service;
  });
