var
  argv = require('yargs').argv,
  build = require('./build'),
  config = require('../config'),
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  path = require('path');
  server = require('./server');

gulp.task('default', function(done) {
  var options = {
    clean: argv.clean || false,
    instance: argv.instance || 'development',
    port: argv.port || 8080,
    serverDir: argv.serverDir || config.serverDir,
    source: argv.source || 'src'
  };

  gutil.log(
    'Building ' + options.instance + ' instance from source in ' +
    options.source + '...'
  );

  build.buildInstance(options, function(err) {
    publicFiles = path.join(config.instances, options.instance, 'public/**/*');
    publicDir = path.join(options.serverDir, 'instances', options.instance, 'public');
    gutil.log('Moving public files to server at ' + publicDir);

    gulp.src(publicFiles)
      .pipe(gulp.dest(publicDir))
      .on('end', done);
  });
});
