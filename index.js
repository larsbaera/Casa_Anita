const express = require("express");
const app = express();
const dotenv = require('dotenv').config();
const path = require('path');
const port = 3000;
var i18next = require("i18next"); 
var middleware=require("i18next-express-middleware");
var FsBackend = require('i18next-node-fs-backend');
var bodyParser = require('body-parser');
var fs = require('fs');

app.set('port', (process.env.PORT || 3000))
app.use(express.static(__dirname + ''));
app.set('views', __dirname + '/views');

i18next
  .use(FsBackend)
  .init({
    lng: 'en',
    preload: ['en', 'no', 'it'],
    saveMissing: true,
    // debug: true,
    backend: {
      loadPath: __dirname + '/locales/{{lng}}/{{ns}}.json',
      addPath: __dirname + '/locales/{{lng}}/{{ns}}.missing.json'
    },
    nsSeparator: '#||#',
    keySeparator: '#|#'
  });
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));  // for parsing application/x-www-form-urlencoded

app.use(middleware.handle(i18next, {}));

app.post('/locales/add/:lng/:ns', middleware.missingKeyHandler(i18next));
// app.post('/locales/add/:lng/:ns',function(req, res) {
//   console.warn(req.query, req.body)
// });

app.use('/locales', express.static('locales'));


app.get('/', function(req,res) {

        res.sendFile('index.html',{root : __dirname + '/views/'});
});
    app.get('/monolocale', function(req,res){
        res.sendFile('monolocale.html',{root : __dirname + '/views/'});
    });

    app.get("/locales/resources.json", middleware.getResourcesHandler(i18next));
    
app.listen(port, ()=> console.log('Listening on port '+ port));