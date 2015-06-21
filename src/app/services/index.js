angular.module('app')
  .provider('Interceptor', function() {
    var apiKey = null;

    this.setApiKey = function(key) {
      apiKey = key;
    };

    this.$get = [
      function() {
        return {
          'request': function(config) {
            console.log('REQUEST', config);
            return config;
          },
          'requestError': function(rejection) {
            console.log('REQUEST ERROR: ', rejection);

            // if (canRecover(rejection)) {
            //   return responseOrNewPromise
            // }

            return $q.reject(rejection);
          },
          'response': function(config) {
            console.log('RESPONSE', config);
            return config;
          },
          'responseError': function(rejection) {
            console.log('RESPONSE ERROR: ', rejection);

            // if (canRecover(rejection)) {
            //   return responseOrNewPromise
            // }

            return $q.reject(rejection);
          }
        };
      }
    ];
  });
