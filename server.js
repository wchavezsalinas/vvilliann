//Server file running express, mongoose, & body-parser
//sends index.html & listens on port 3000
var express = require('express')
  , http = require('http');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var server = http.createServer(app);
var blogController = require('./server/controllers/blog-controller');
var projectController = require('./server/controllers/projects-controller');

mongoose.connect('mongodb://localhost/vvilliann');

app.use(bodyParser.json());
app.use('/app', express.static(__dirname + "/app"));
app.use('/node_modules', express.static(__dirname + "/node_modules"));

app.get('*', function(req, res) {
    res.sendfile('index.html');
})

//Blog Posts
app.post('/api/blog/post', blogController.post);
app.get('/api/blog/get', blogController.get);
app.get('/api/blog/getPost', blogController.getPost);

//Projects
app.post('/api/projects/post', projectController.post);
app.get('/api/projects/get', projectController.get);
app.get('/api/projects/getPost', projectController.getPost);

app.listen("3000", function() {
    console.log("listening for localhost(3000)");
});
