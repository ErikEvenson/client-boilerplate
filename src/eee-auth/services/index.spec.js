describe('eee-auth services', function() {
  beforeEach(angular.mock.module('app'));

  describe('AuthServices', function() {
    var AuthService, $httpBackend;

    // config and set up mocks
    beforeEach(angular.mock.module(function(AuthServiceProvider) {

    }));

    // inject dependencies
    beforeEach(inject(function(_AuthService_, _$httpBackend_) {
      AuthService = _AuthService_;
      $httpBackend = _$httpBackend_;
    }));

    it('should authenticate', function() {
      var username = 'username';
      var password = 'password';

      $httpBackend
        .expectPOST('/authenticate', {username: username, password: password})
        .respond({
          data: {
            token: 'token'
          }
        });

      AuthService.authenticate(username, password);
      $httpBackend.flush();
    });

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });
  });
});