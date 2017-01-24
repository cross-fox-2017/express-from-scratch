'use strict'
var express = require('express')
var router = express.Router()
const db = require('./models')
router.get('/',function(req,res){
  db.findAll().then(function(users){

  })
})

module.exports=router
