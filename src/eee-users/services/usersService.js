angular.module('eee-users')
  .factory('UsersService', function(Group, User) {
    var service = {};
    var groups = [];
    var users = [];

    service.getGroups = function() {
      return groups;
    };
    
    service.getUsers = function() {
      return users;
    };

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
