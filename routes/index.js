"use strict"

const routes = require('express').Router();
const models = require('../models')
let user = models.User

routes.get('/', function(req, res){
  user.findAll().then(function(data){
    res.json(data)
  })
});

routes.post('/', function(req, res, next){
  let firstname = req.body.firstname
  let lastname = req.body.lastname
  let phone = req.body.phone
  user.create({firstname: firstname, lastname: lastname, phone: phone}).then(function(data) {
    res.json(data)
  })
});

routes.put('/:id', function(req, res){
  let id = req.params.id
  let firstname = req.body.firstname
  let lastname = req.body.lastname
  let phone = req.body.phone
  user.findById(req.params.id).then(function(user){
    user.update({
      firstname:firstname,
      lastname: lastname,
      phone: phone
    }).then(function(data){
      res.json(data)
    })
  })
});

routes.delete('/:id', function(req, res){
  let id = req.params.id
  user.findById(id).then(function(user){
    user.destroy().then(function(data) {
      res.json(data)
    })
  })
})


module.exports = routes
