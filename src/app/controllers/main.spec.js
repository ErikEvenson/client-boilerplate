describe('App Controllers', function() {
  beforeEach(angular.mock.module('app'));

  describe('MainController', function() {
    var mainController, $scope;

    beforeEach(function() {
      angular.mock.module(function($provide) {
        $provide.factory('AuthService', function() {
          var mock = {
            logged: function() {return true;},
            logout: function() {return;},
            loggedUser: function() {return 'testuser';},
            useTokenFromCache: function() {return 'token';}
          };

          return mock;
        });
      });
    });

    beforeEach(inject(function($rootScope, $controller, $state, AuthService) {
      $scope = $rootScope.$new();

      mainController = $controller('MainController', {
        $scope: $scope,
        $state: $state,
        AuthService: AuthService
      });
    }));

    it('brand should be Boilerplate', function() {
      expect($scope.brand).toEqual('Boilerplate');
      expect($scope.logged()).toEqual(true);
      expect($scope.logout()).toEqual(undefined);
      expect($scope.loggedUser()).toEqual('testuser');
    });
  });
});