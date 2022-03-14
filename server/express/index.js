const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
var http = require('http');
var https = require('https');

app.use('/', express.static('app'))
app.use(bodyParser.json());

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);


httpServer.listen(8080);

httpsServer.listen(8443);

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../../index.html'));
  });

app.get('/welcome', function (req, res) {
    res.send('<b>Hello</b> welcome to my http server made with express');
});

// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("irresponsive route");
});

app.listen(port, () => console.log(`http://localhost:${port}`));
http.listen(8080, '0.0.0.0', function(){
	console.log('listening on *:8080');
  });