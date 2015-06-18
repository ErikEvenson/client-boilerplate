require('angular');

angular.module('eee-users')
  .factory('Group', function() {
    function Group(args) {
      this.name = args.name;
    }

    return Group;
  });
