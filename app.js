"use strict"

const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser');
const index = require('./routes/index');
const users = require('./routes/users');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', users);
app.use('/users', users);

app.listen(3000)
