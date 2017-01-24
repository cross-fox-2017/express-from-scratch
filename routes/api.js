"use strict"

const routes = require('express').Router();
const models = require('../models')
let user = models.User

routes.get('/user', function(req, res){
  user.findAll().then(function(data){
    res.json(data)
  })
});

routes.post('/user/add', function(req, res){
  user.create({firstname: firstname, lastname: lastname, phone: phone}).then(function(user) {
    res.json(user)
  })
});

routes.put('/user/put', function(req, res){
  user.findById(id).then(function(user){
    user.update({
      firstname:firstname,
      lastname: lastname,
      phone: phone
    }).then(function(user){
      res.json(user)
    })
  })
});

routes.delete('/user/delete', function(req, res){
  user.findById(id).then(function(user){
    user.destroy().then(function(user) {
      res.json(user)
    })
  })
})


module.exports = routes
