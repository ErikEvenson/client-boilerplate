module.exports = function(config) {
  config.set({
    autoWatch: true,
    files: [
      'bower_components/bootstrap/dist/css/bootstrap.min.css',
      'bower_components/angular-ui-grid/ui-grid.min.css',
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'bower_components/angular-messages/angular-messages.min.js',
      'bower_components/angular-resource/angular-resource.min.js',
      'bower_components/angular-ui-router/release/angular-ui-router.min.js',
      'bower_components/angular-ui-grid/ui-grid.min.js',
      'bower_components/angular-animate/angular-animate.min.js',
      'bower_components/angular-local-storage/dist/angular-local-storage.min.js',
      'src/**/*.js'
    ],
    frameworks: ['browserify', 'jasmine'],
    reporters: ['progress'],
    browsers: ['PhantomJS'],
    captureTimeout: 60000,
    singleRun: false,
    preprocessors: {
      'src/**/*.spec.js': ['ngannotate'],
      'src/**/*.js': ['browserify']
    },
    browserify: {
      debug: true
    },
    watchify: {
      poll: true
    }
  });
};
