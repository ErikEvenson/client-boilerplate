var
  async = require('async');

angular.module('eee-auth')
  .factory('AuthService', function($http, $q, $resource, $rootScope, localStorageService) {
    var apiUrl = '/api';
    var service = {};
    var apiVersion = '/v1';

    var Registrations = $resource(apiUrl + apiVersion + '/auth/registrations/:token');
    
    service.Registrations = Registrations;

    service.activate = function(token, cb) {
      $http.post(
        apiUrl + apiVersion + '/auth/registrations/' + token + '/activate',
        {}
      )
        .then(function() {
          cb();
        });
    };

    service.register = function(registration, user, done) {
      async.parallel(
        [
          function(cb) {
            user.$save().then(function() {
              cb();
            });
          },
          function(cb) {
            registration.username = user.username;

            registration.$save().then(function() {
              cb();
            });
          }
        ],
        function(err, results) {
          done(err);
        }
      );
    };

    service.authenticate = function (username, password) {
      $http.post('/authenticate', {
        username: username,
        password: password
      }).then(
        function(data) {
          localStorageService.add('eee-auth:token', data.token);
          $http.defaults.headers.common['x-access-token'] = data.token;
          $rootScope.$broadcast('eee-auth:success');
        },
        function(err) {
          $rootScope.$broadcast('eee-auth:failure');
        }
      );
    }

    service.useTokenFromCache=function() {
      var token = localStorageService.get('eee-auth:token');
      if(token) $http.defaults.headers.common['x-access-token'] = data.token;
    }   

    return service;
  });
