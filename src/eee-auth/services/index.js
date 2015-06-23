angular.module('eee-auth')
  .factory('AuthService', function($http, $q, $resource) {
    var apiUrl = '/api';
    var service = {};
    var apiVersion = '/v1';

    var Registrations = $resource(apiUrl + apiVersion + '/auth/registrations/:registrationToken');
    
    service.Registrations = Registrations;

    service.login = function(username, password) {
      console.log(username, password);
    }
    

    // https://github.com/grevory/angular-local-storage


    // service.authenticate = function (userName, password) {
    //     $http.post('/authenticate', {
    //         user: userName,
    //         password: password
    //     }).then(function (data) {
    //         localStorageService.add('authToken', data.token);
    //         $http.defaults.headers.common['Authorization'] = 'Basic ' + data.token;
    //         $rootScope.$broadcast('userAuthenticated');
    //     });
    // }
    // service.useTokenFromCache=function() {
    //     var token=localStorageService.get('authToken');
    //     if(token) 
    //     $http.defaults.headers.common['Authorization'] 
    //       = 'Basic ' + data.token;
    // }   



    return service;
  });
