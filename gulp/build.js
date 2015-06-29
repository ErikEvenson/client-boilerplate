var
  argv = require('yargs').argv,
  async = require('async'),
  browserify = require('./browserify'),
  clean = require('./clean'),
  config = require('../config'),
  del = require('del'),
  gcallback = require('gulp-callback'),
  gulp = require('gulp'),
  mkdirp = require('mkdirp'),
  newer = require('gulp-newer'),
  path = require('path'),
  templates = require('./templates');

var lib = {
  buildInstance: function(options, done) {
    var instancePath = path.join(config.instances, options.instance);
    var sourcePath = path.join(config.basepath, options.source, '**/*');

    var sourceFiles = [
      sourcePath
    ];

    // Remove source directory.
    sourceFiles.push(path.join('!' + config.basepath, options.source));

    // Remove test files.
    sourceFiles.push(path.join(
      '!' + config.basepath, options.source, '**/*.spec.js'
    ));

    // Add bower files
    bowerFiles = [
      // CSS
      path.join(config.basepath, 'bower_components/bootstrap/dist/css/bootstrap.min.css'),
      path.join(config.basepath, 'bower_components/angular-ui-grid/ui-grid.min.css'),

      // JS
      path.join(config.basepath, 'bower_components/angular/angular.js'),
      path.join(config.basepath, 'bower_components/angular-mocks/angular-mocks.js'),
      path.join(config.basepath, 'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js'),
      path.join(config.basepath, 'bower_components/angular-messages/angular-messages.min.js'),
      path.join(config.basepath, 'bower_components/angular-resource/angular-resource.min.js'),
      path.join(config.basepath, 'bower_components/angular-ui-router/release/angular-ui-router.min.js'),
      path.join(config.basepath, 'bower_components/angular-ui-grid/ui-grid.min.js'),
      path.join(config.basepath, 'bower_components/angular-animate/angular-animate.min.js'),
      path.join(config.basepath, 'bower_components/angular-local-storage/dist/angular-local-storage.min.js'),

      // OTHER
      path.join(config.basepath, 'bower_components/angular-ui-grid/ui-grid.woff'),
      path.join(config.basepath, 'bower_components/angular-ui-grid/ui-grid.ttf')
    ];

    async.series([
      // Clean if asked
      function(cb1) {
        if (options.clean) {
          clean.cleanInstance(options.instance, cb1);
        } else {
          cb1();
        }
      },
      // Move soruce files
      function(cb3) {
        gulp.src(sourceFiles)
          // .pipe(newer(instancePath))
          .pipe(gulp.dest(instancePath))
          .on('end', cb3);
      },
      // Move bower files
      function(cb) {
        gulp.src(bowerFiles, {base: config.basepath})
          .pipe(gulp.dest(path.join(instancePath, 'public')))
          .on('end', cb);
      },
      // Templates
      function(cb4) {
        templates.templates(options, cb4);
      },
      // Browserify
      function(cb5) {
        browserify.browserify({
          bundle: path.join(instancePath, 'app/public/js/app.js'),
          main: path.join(instancePath, 'app/app.js')
        }, cb5);
      },
      // Minify
      // ...
      // Move public files
      function(cb) {
        var publicFiles = path.join(instancePath, 'app/public/**/*');
        var publicDir = path.join(instancePath, 'public');

        gulp.src(publicFiles)
          .pipe(gulp.dest(publicDir))
          .on('end', cb);
      },
      // Remove extraneous files
      function(cb6) {
        delFiles = [
          path.join(instancePath, 'app/**/{/,*}'),
          path.join(instancePath, 'eee-users/**/{/,*}')
        ];

        del(delFiles, cb6);
      }
    ], done);
  }
};

module.exports = lib;

gulp.task('build', function(done) {
  var options = {
    clean: argv.clean || false,
    instance: argv.instance || 'development',
    source: argv.source || 'src'
  };

  return lib.buildInstance(options, done);
});
