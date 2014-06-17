
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

app.listen(proc.env.PORT ||3000, function(){
  console.log("Express server listening on port");
});
