var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));


var api = require('./api.js');

app.get('/api*', function(req, res) {
    api.request(req, res);
});

app.post('/api*', function(req, res) {
    api.request(req, res);
});


app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});