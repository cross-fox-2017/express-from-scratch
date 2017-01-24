'use strict'

const express = require('express')
const index = require('./routes/index');
const path = require('path');
const app = express()
const bodyParser = require('body-parser');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);

// app.get('/', function(request, response){
//   response.send("I love Hacktiv8!")
// })
app.listen(3000)
