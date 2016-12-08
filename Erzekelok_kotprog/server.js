
var express = require('express');

var path = require('path');

var app = express();

var port = 8080;

var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true})); 

app.use(express.static(__dirname +'/site'));

    console.log(req.body.data); 
    res.send('200').end(); 

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, './site', 'index_tabs.html'));
});

app.listen(port);
