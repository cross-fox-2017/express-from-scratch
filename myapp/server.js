'use strict'

const express = require('express')
var index = require('./routes/index');

let app = express()

app.use('/', index);

app.listen(3000)

module.exports = app;
