var
  argv = require('yargs').argv,
  config = require('../config'),
  connect = require('connect'),
  debug = require('debug')(__filename),
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  path = require('path'),
  serveStatic = require('serve-static');

var lib = {
  serverStart: function(instance, port) {
    instance = instance || 'development';
    port = port || 8080;
    var publicDir = path.join(config.basepath, 'instances', instance, 'public');
    connect().use(serveStatic(publicDir)).listen(port);
  }
};

module.exports = lib;

gulp.task('server:start', function() {
  var instance = argv.instance || 'development';
  var port = argv.port || 8080;
  lib.serverStart(instance, port);
  gutil.log('Client development server running on port ' + port + '...');
});
