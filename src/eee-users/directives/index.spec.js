describe('eee-users directives', function() {
  var $compile, $rootScope, $scope;
  beforeEach(angular.mock.module('app'));

  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
  }));

  describe('remoteValidator', function() {
    var inputElement;

    beforeEach(inject(function() {
      $scope.validate = function(value) {};
      inputElement = 
        "<form name='testForm'><input type='text' name='unique' " +
        "ng-model='name' remote-validator='unique' " +
        "remote-validator-function='validate(value)' /></form>";
    }));

    it('should verify unique name', function() {
      inject(function($q) {
        spyOn($scope, 'validate').and.returnValue($q.when(true));
        $compile(inputElement)($scope);
        $scope.testForm.unique.$setViewValue('dummy');
        expect($scope.validate).toHaveBeenCalled();
      });
    });

    it(
      'failed unique should set the model controller invalid',
      inject(function($q) {
        spyOn($scope, 'validate').and.returnValue($q.reject());
        $compile(inputElement)($scope);
        $scope.testForm.unique.$setViewValue('dummy');
        expect($scope.validate).toHaveBeenCalled();
        $scope.$digest();
        expect($scope.testForm.$valid).toBe(false);
        expect($scope.testForm.unique.$valid).toBe(false);
        expect($scope.testForm.unique.$error.unique).toBe(true);
      })
    );
  });
});