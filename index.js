var argv = require('yargs').argv;
var connect = require('connect');
var path = require('path');
var serveStatic = require('serve-static');

var instance = argv.instace || 'development';
var port = 8080;
var publicDir = path.join(__dirname, 'instances', instance, 'public');

connect().use(serveStatic(publicDir)).listen(port);
console.log('Development server running on port ' + port + '...');
