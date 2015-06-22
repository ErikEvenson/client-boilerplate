var _ = require('lodash');

angular.module('eee-users')
  .factory('UsersService', function($http, $resource) {
    var apiUrl = '/api';
    var service = {};
    var apiVersion = '/v1';

    service.Users = $resource(
      apiUrl + apiVersion + '/users/:username', {}, {update: {method: 'PUT'}}
    );

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
