'use strict'

const express = require('express')
const router = require('./routes/index')
const path = require('path');
const bodyParser = require('body-parser');

let app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/',router)



app.listen(3000)
