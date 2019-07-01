const express = require("express");
const app = express();
const dotenv = require('dotenv').config();
const port = 3000;
const router = express.Router();
const path = require('path');
app.set('view engine', "html");
app.use(express.static(__dirname + '/'));

app.use('/', router);

app.get('/', function(req,res) { 
    res.render('index')});

    app.get('/apt1', function(req,res){
        res.send("here is apt 1..")
    });
app.listen(port, ()=> console.log('Listening on port 3000'));