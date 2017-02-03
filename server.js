const express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send("Welcome!");
});

app.listen(80);
