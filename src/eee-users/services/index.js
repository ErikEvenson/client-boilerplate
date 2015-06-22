var _ = require('lodash');

angular.module('eee-users')
  .factory('UsersService', function($http, $q, $resource) {
    var apiUrl = '/api';
    var service = {};
    var apiVersion = '/v1';

    var Users = $resource(
      apiUrl + apiVersion + '/users/:username', {}, {update: {method: 'PUT'}}
    );

    service.Users = Users;

    service.uniqueUsername = function(username) {
      if (!username) return $q.when(false);

      return Users
        .get({username: username})
        .$promise
        .then(
          function(data) {return $q.reject();},
          function(error) {return true;}
        );      
    }

    return service;
  });

angular.module('eee-users')
  .provider('AuthInterceptor', function() {
    var apiKey = null;

    this.setApiKey = function(key) {
      apiKey = key;
    };

    this.$get = function($q, $rootScope) {
      return {
        'responseError': function(error) {
          if (error.status === 401) {
            $rootScope.$broadcast('unauthorized', error);
          }

          return $q.reject(error);
        }
      };
    };
  });
