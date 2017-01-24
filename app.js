'use strict'
var bodyParser = require('body-parser'); // untuk mengambil data pada body form
var express = require('express')
var app = express()
var routes = require('./routes/server')
var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/',routes)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000)
