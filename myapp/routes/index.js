'use strict'

const express = require('express')
var router = express.Router();


router.get('/', function(request, response) {
  response.send("I love You")
})


module.exports = router;
