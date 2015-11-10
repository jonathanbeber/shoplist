var express = require('express');
var routes = require('./routes');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.get('/', routes.index);
app.get('/lista', routes.lista);
app.post('/add', routes.add);
app.put('/update', routes.update);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen( process.env.VCAP_APP_PORT || 8080 );
