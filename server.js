var express = require('express');
var app = express();

var port = 3000; 
app.use(express.static(__dirname + '/public'));

app.listen(port, ()=>{console.log('listening on 3000')});

