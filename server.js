var express = require('express');

var app = express();

app.get('/', function(req,res){
  res.send('Hola mundo');
})

app.listen(3000, function (err){
  if (err) return console.console.log('error'),process.exit(1);
  console.log('sí escucho en el 3000');
})
