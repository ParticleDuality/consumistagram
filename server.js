var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.get('/', function(req,res) {
  res.render('index');
})



app.listen(3000, function (err){
  if (err) return console.console.log('error'),process.exit(1);
  console.log('sí escucho en el 3000');
})
