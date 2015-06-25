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

    service.authenticate = function (username, password) {
      $http.post('/authenticate', {
        username: username,
        password: password
      }).then(
        function(res) {
          localStorageService.set('eee-auth:token', res.data.token);
          localStorageService.set('eee-auth:username', username);
          $http.defaults.headers.common['x-access-token'] = res.data.token;
          $rootScope.$broadcast('eee-auth:success');
        },
        function(err) {
          $rootScope.$broadcast('eee-auth:failure');
        }
      );
    };

    service.logged = function() {
      var logged = false;
      if (localStorageService.get('eee-auth:token')) logged = true;
      return logged;
    };

    service.logout = function() {
      localStorageService.remove('eee-auth:token');
      localStorageService.remove('eee-auth:username');
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

    service.useTokenFromCache = function() {
      var token = localStorageService.get('eee-auth:token');
      if(token) $http.defaults.headers.common['x-access-token'] = token;
    };

    service.loggedUser = function() {
      return localStorageService.get('eee-auth:username');
    };

    return service;
  });
