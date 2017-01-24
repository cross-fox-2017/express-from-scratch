'use strict'

let express = require ('express')
let app = express()

app.get('/', function (request, response) {
  response.send('Tes')
})


app.listen(3000)
