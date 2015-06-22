angular.module('app')
  .directive('remoteValidator', function($parse) {
    return {
      require: 'ngModel',

      link: function (scope, elm, attr, ngModelCtrl) {
        var expfn = $parse(attr["remoteValidatorFunction"]);
        var validatorName = attr["remoteValidator"];

        ngModelCtrl.$asyncValidators[validatorName] = function(value) {
          return expfn(scope, { 'username': value });
        }
      }
    }
  });
