'use strict'

const express = require('express');
const router = express.Router();
const models = require("../models")

router.get('/', function(req, res, next) {
  models.User.findAll({raw: true}).then(function(users){
    res.render('index', { result : users});
  })
});

router.post('/add', function(req, res, next) {
  models.User.create({firstname: req.body.firstname, lastname: req.body.lastname, phone: req.body.phonenumber}).then(function (data) {
    res.redirect('/')
  })
});

router.get('/edit/:id', function(req, res, next) {
  models.User.findById(req.params.id).then(function (data) {
    res.render("edit",{hasil: data})
  })
});

router.post('/update', function(req, res, next) {
  models.User.findById(req.body.id).then(function (data) {
    data.update({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phone: req.body.phone
    }).then(function(){
      res.redirect('/')
    })
  })
});

router.get('/delete/:id', function(req, res, next) {
  models.User.destroy({
    where: {
      id: req.params.id
    }
  })
  res.redirect('/')
});

module.exports = router;
