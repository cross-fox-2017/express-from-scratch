"use strict"
const express = require('express')
let router = express.Router()

router.get('/', function (req, res){
  res.send("I love Hacktiv8 Cross Fox")
})

module.exports = router;
