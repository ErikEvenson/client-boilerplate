angular.module('eee-auth')
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
