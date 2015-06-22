angular.module('eee-users')
  .controller(
    'UsersController',
    function($scope, UsersService) {
      $scope.users = UsersService.Users.query();

      $scope.gridOptions = {
        columnDefs: [
          {
            field: 'username',
            cellTemplate: '<div class="ui-grid-cell-contents"><a ui-sref="user({username:&quot;{{COL_FIELD}}&quot;})">{{COL_FIELD}}</a></div>',
            type: 'string'
          },
          {field: 'name.first', type: 'string'},
          {field: 'name.last', type: 'string'},
          {field: 'email', type: 'string'},
          {field: 'created', type: 'date'}
        ],
        data: $scope.users,
        enableFiltering: true,
        showGridFooter: true
      };
    }
  )
  .controller(
    'UserController',
    function($q, $scope, $state, $stateParams, UsersService) {
      if ($stateParams.username) {
        UsersService.Users
          .get({username: $stateParams.username}, function(user) {
            $scope.user = user;
          });
      } else {
        $scope.user = new UsersService.Users();
      }

      $scope.delete = function() {
        if ($scope.user._id) {
          $scope.user.$delete({username: $scope.user.username})
            .then(function() {
              return $state.go('users');
            });
        } else {
          return $state.go('users');
        }
      };

      $scope.save = function() {
        if ($scope.userForm.$invalid) return;

        if ($scope.user._id) {
          $scope.user.$update({username: $scope.user.username})
            .then(function() {
              $scope.userForm.$setPristine();
            });
        } else {
          $scope.user.$save()
            .then(function() {
              return $state.go('user', {username: $scope.user.username});
            });
        }
      };

      $scope.uniqueUsername = function(username) {
        if (!username || username === $stateParams.username) return $q.when(true);

        return UsersService.Users
          .get({username: username})
          .$promise
          .then(
            function(data) {return $q.reject();},
            function(error) {return true;}
          );
      };
    }
  );
