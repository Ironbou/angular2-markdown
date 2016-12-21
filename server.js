var compression = require('compression');
var express = require('express');
var path = require('path');
//var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');

var app = express();
app.use(compression());

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(req, res, next) {
  res.render('../dist/index.html');
});

app.get('*', function(req, res, next) {
  res.render('../dist/index.html');
});

app.set('port', 80);
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('listen port:80');
});
