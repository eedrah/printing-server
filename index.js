var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/', function (req, res) {
    console.log(req.body);
    res.send(null);
});

app.get('/', function (req, res) {
  res.send('Hello World!');
  console.log(req);
});

app.get('/json', function (req, res) {
  res.send({one: 1, two: "twoString"});
});

app.get('/parsererror', function (req, res) {
  res.send("{one: asd;lfijasdf;lkjasd;flkjasdf;ljsdlfkj2345 234}");
});

app.get('/500error', function (req, res) {
  res.send(sdfgdsadfsasdfg);
});

var one = {one: 1};
app.get('/one', function (req, res) {
  console.log('get, one');
  res.send(one);
});
app.post('/one', function (req, res) {
  console.log('post, one');
  console.log(req.body);
  one = req.body;
  console.log(one);
  res.send(one);
});

var two = {two: 2};
app.get('/two', function (req, res) {
  console.log('get, two');
  res.send(two);
});
app.post('/two', function (req, res) {
  console.log('post, two');
  two = req.body;
  res.send(two);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Server listening at http://%s:%s', host, port);
});
