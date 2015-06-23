angular.module('app')
  .provider('AppInterceptor', function() {
    // var apiKey = null;

    // this.setApiKey = function(key) {
    //   apiKey = key;
    // };

    this.$get = function($q, $rootScope, $injector) {
      return {
        'responseError': function(error) {
          if (error.status === 401) {
            $rootScope.$broadcast('unauthorized', error);
          } else if (error.status === 404) {
            return $injector.get('$state').go('http404');
          }

          return $q.reject(error);
        }
      };
    };
  });
