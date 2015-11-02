var express = require('express');
var routes = require('./routes');
var ejs = require('ejs');
var path = require('path');

var app = express();
app.get('/', routes.index);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen( process.env.VCAP_APP_PORT || 8080 );
