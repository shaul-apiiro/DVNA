var express = require('express');
var app = express();
app.get('/', function(req, res) {
  // var resp=eval("("+req.query.target+")");
  var rest = "Must not use eval"
  res.send('Parameter Value:</br>'+resp);
  });
app.listen(9000);
