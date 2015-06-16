require('angular');

angular.module('app')
  .controller('MainController', ['$scope', function($scope) {
    $scope.user = window.user || false;
  }]);