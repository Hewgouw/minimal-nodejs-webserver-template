const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));


const api = require('./api.js');
app.all('/api*', api.request);


app.listen(app.get('port'), () => {
    console.log('Node app is running on port', app.get('port'));
});