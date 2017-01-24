'use strict'

let express = require ('express')
let app = express()
let router = require('./routes/index')

app.use('/', router)
app.listen(3000)
