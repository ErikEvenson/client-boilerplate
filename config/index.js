var
  path = require('path');

var basepath = path.join(__dirname, '..');

module.exports = {
  // aws parameters
  aws: {
    bucket: 'eeegen',
    region: 'us-west-2'
  },
  basepath: basepath,
  instances: path.join(basepath, 'instances'),

  // The location where the secrets object is stored.  This should not be
  // checked into version control.
  secrets: path.join(basepath, 'secrets'),

  // serverDir provides the location of the server project.  This is where
  // the build process will send the built assets.
  serverDir: path.join(basepath, '../server-boilerplate'),

  // A place to store temp files.  Will not be checked into version control.
  temp: path.join(basepath, 'temp')
};
