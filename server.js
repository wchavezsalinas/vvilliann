//Server file running express, mongoose, & body-parser
//sends index.html & listens on port 3000


var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use('/app', express.static(__dirname + "/app"));
app.use('/node_modules', express.static(__dirname + "/node_modules"));

app.get('/', function(req, res) {
  res.sendfile('index.html');
})

app.listen("3000", function() {
  console.log("listening for localhost(3000)");
});
