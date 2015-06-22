angular.module(
  'app',
  [
    'eee-auth',
    'eee-users',
    'ngMessages',
    'ngResource',
    'ui.grid',
    'ui.router',
    'ui.bootstrap'
  ]
);

require('./templates');
require('./config');
require('./services');
require('./controllers');

// Modules
require('../eee-auth');
require('../eee-users');

// Finally, bootstrap the angular app
angular.element(document).ready(function() {
  angular.bootstrap(document, ['app'], {
    strictDi: true
  });
});

