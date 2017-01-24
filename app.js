'use strict'

let express = require ('express')
let app = express()
let router = require('./routes/user')
let path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router)

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(3000)
