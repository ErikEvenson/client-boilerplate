require('angular');

angular.module('eee-users')
  .factory('User', function() {
    function User(args) {
      this.email = args.email;
      this.name = args.name;
      this.username = args.username;
    }

    return User;
  });
