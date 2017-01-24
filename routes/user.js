'use strict'

let express = require ('express')
let router = express.Router()
let model = require ('../models')
let user = model.User

// GET
router.get('/', function (request, response) {
  user.findAll().then(function (data) {
    response.render('user', {title: "ini tabel", result: data})
  })
})


//POST

//PUT

// DELETE

module.exports = router
