"use strict"

const express = require('express')
let router = express.Router();
let models = require('../models')

router.get('/', function (req, res){
  models.Users.findAll({raw:true}).then(function (find) {
    res.render("pages/users", {data: find})
  })
})

router.get('/update/:id', function (req, res, next){
  models.Users.findById(req.params.id).then(function (find) {
    res.render("pages/update", {user: find})
  })
})

router.post('/update', function (req, res, next){
  models.Users.findById(req.body.id).then(function (find) {
    find.update({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phone: req.body.phone
    }).then(function(){
      res.redirect('/')
    })
  })
})

router.post('/add', function (req, res, next){
  models.Users.create({firstname: req.body.firstname, lastname: req.body.lastname, phone: req.body.phone, createdAt: new Date()}).then(function (data) {
    res.redirect('/')
  })
})

router.get('/delete/:id', function (req, res, next){
  models.Users.destroy({
    where: {
      id: req.params.id
    }
  })
  res.redirect('/')
})



module.exports = router;
