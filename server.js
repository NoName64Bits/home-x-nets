const express = require('express');

var app = express();

app.get('/:title', function(req, res){
  res.send("<head><title>" + req.params.title + "</title></head>Okkk");
});

app.listen(80);
