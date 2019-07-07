const express = require("express");
const app = express();
const dotenv = require('dotenv').config();
const path = require('path');
const port = 3000;
app.set('port', (process.env.PORT || 3000))
// app.use(express.static(__dirname + '/public'));
// app.set('views', __dirname + '/public/views');

app.get('/', function(req,res) { 
        res.sendFile('index.html',{root : __dirname + '/public/views/'});
});
    app.get('/monolocale', function(req,res){
        res.sendFile('monolocale.html',{root : __dirname + '/public/views/'});
    });
    app.get('/bilocale', function(req,res){
        res.sendFile('bilocale.html',{root : __dirname + '/public/views/'});
    });
    app.get('/trilocale', function(req,res){
        res.sendFile('trilocale.html',{root : __dirname + '/public/views/'});
    });
app.listen(port, ()=> console.log('Listening on port 3000'));