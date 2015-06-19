var
  path = require('path');

var basepath = path.join(__dirname, '..');

module.exports = {
  aws: {
    bucket: 'eeegen',
    region: 'us-west-2'
  },
  basepath: basepath,
  instances: path.join(basepath, 'instances'),
  secrets: path.join(basepath, 'secrets'),
  serverDir: path.join(basepath, '../server-boilerplate'),
  temp: path.join(basepath, 'temp')
};
