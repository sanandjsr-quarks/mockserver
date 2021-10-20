var express = require('express');
var fs = require('fs');
var app = express();
var conf = require('./routes/conf-service/conf');
var core = require('./routes/core-service/core');

var router = express.Router();

app.get('/api/v1/config/general',conf.general);
app.get('/healthcheck', core.healthcheck);


app.listen(8989);

module.exports = app;
