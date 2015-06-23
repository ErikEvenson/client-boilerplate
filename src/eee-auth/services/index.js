// angular.module('eee-auth')
//   .provider('AuthInterceptor', function() {
//     var apiKey = null;

//     this.setApiKey = function(key) {
//       apiKey = key;
//     };

//     this.$get = function($q, $rootScope) {
//       return {
//         'responseError': function(error) {
//           if (error.status === 401) {
//             $rootScope.$broadcast('unauthorized', error);
//           } else if (error.status === 404) {
//             $rootScope.$broadcast('notFound', error);
//           }

//           return $q.reject(error);
//         }
//       };
//     };
//   });

angular.module('eee-auth')
  .factory('AuthService', function($http, $q, $resource) {
    var apiUrl = '/api';
    var service = {};
    var apiVersion = '/v1';
    var Registrations = $resource(apiUrl + apiVersion + '/auth/registrations/:registrationToken');
    service.Registrations = Registrations;
    return service;
  });
