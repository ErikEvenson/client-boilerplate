var
  angular = require('angular');

require('angular-bootstrap-npm');

angular.module(
  'app',
  [
    'ngResource',
    'ngRoute',
    'ui.bootstrap',
    'users'
  ]
);

require('./templates');
require('./config');

// Modules
require('../users/module');

// Finally, bootstrap the angular app
angular.element(document).ready(function() {
  angular.bootstrap(document, ['app'], {
    strictDi: true
  });
});

