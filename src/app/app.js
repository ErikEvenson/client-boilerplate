var
  angular = require('angular');

require('angular-ui-router');
require('angular-bootstrap-npm');

angular.module(
  'app',
  [
    'ui.router',
    'ui.bootstrap',
    'eee.users'
  ]
);

require('./templates');
require('./config');
require('./services');
require('./controllers');

// Modules
require('../eee.users');

// Finally, bootstrap the angular app
angular.element(document).ready(function() {
  angular.bootstrap(document, ['app'], {
    strictDi: true
  });
});

