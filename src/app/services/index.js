angular.module('app')
  .provider('AppInterceptor', function() {
    // var apiKey = null;

    // this.setApiKey = function(key) {
    //   apiKey = key;
    // };

    this.$get = function($q, $rootScope) {
      return {
        // 'request': function(config) {
        //   console.log('REQUEST', config);
        //   return config;
        // },
        // 'requestError': function(rejection) {
        //   console.log('REQUEST ERROR: ', rejection);

        //   // if (canRecover(rejection)) {
        //   //   return responseOrNewPromise
        //   // }

        //   return $q.reject(rejection);
        // },
        // 'response': function(config) {
        //   console.log('RESPONSE', config);
        //   return config;
        // },
        'responseError': function(error) {
          if (error.status === 401) {
            $rootScope.$broadcast('unauthorized', error);
          } else if (error.status === 404) {
            $rootScope.$broadcast('notFound', error);
          }

          return $q.reject(error);
        }
      };
    };
  });
