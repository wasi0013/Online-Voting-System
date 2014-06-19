
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = express();

// Configuration

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));



// Routes
app.get('/', routes.index);

//defining app_port for openshift hosting compatibility
var app_port = process.env.OPENSHIFT_NODEJS_PORT ||3000;
var app_ip =process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.listen(app_port,app_ip, function(){
  console.log("Express server listening on port "+app_port+"& app_ip "+app_ip);
});
