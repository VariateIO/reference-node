
var express = require('express');
var restSwitchboard = require('./switchboard.js');

var env = process.env.NODE_ENV || 'dev';
var config = require('./config/'+env+'.json');

var app = express();

app.get('/', function(request, response) {
  response.send(restSwitchboard);
});

app.listen(config.service.port, config.service.hostname, function() {
  console.log('Reference Service API listening at http://%s:%s', config.service.hostname, config.service.port);
});
