'use strict'

let express = require ('express')
let router = express.Router()

router.get('/', function (request, response) {
  response.send('hallo dunia')
})

module.exports = router
