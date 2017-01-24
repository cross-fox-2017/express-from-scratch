"use strict"
//dependencies
const express = require('express')
let app = express()
var bodyParser = require('body-parser');

const routes = require('./routes/index')
const api = require('./routes/api')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//connecting routes
app.use('/', routes)
app.use('/api', api)

//server
app.listen(3000, function(){
  console.log('Server Is Running');
})
