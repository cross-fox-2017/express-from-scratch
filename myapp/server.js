'use strict'

const express = require('express')
const router = require('./routes/index')
let app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/',router)

app.listen(3000)
