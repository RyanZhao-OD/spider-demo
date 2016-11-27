const express = require('express');
const path = require('path');
const NovelModel = require('./db').NovelModel;

let app = express();

app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', require('ejs').__express);


app.get('/', function(request, response){
    NovelModel.find({}, function (error, novels) {
        response.render('index', {
            novels: novels
        });
    });
});
app.listen(8080);