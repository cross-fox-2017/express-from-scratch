'use strict'

const express = require('express')
let router = express.Router();
const models = require('../models')

router.get('/', function (req, res) {
  models.User.findAll().then(function (data) {
    res.send(data)
  })
})

// router.get('/delete', function (req, res) {
//   models.User.findById().then(function (data) {
//     console.log(data);
//   }).then(function(){
//     res.render('server')
//   })
// })

router.get('/server', function (req, res) {
  models.User.findAll().then(function (data) {
    res.render('server',{
      getdata:data
    })
  })
})

router.post('/insert', function (req, res) {
  models.User.create({
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    phone : req.body.phone,
    createdAt : new Date(),
    updatedAt : new Date()
  }).then(function(){
    res.redirect('/server')
  })
})

router.get('/delete/:getid', function (req, res) {
  models.User.findById(req.params.getid).then(function (data) {
    data.destroy()
  }).then(function(){
    res.redirect('/server')
  })
})

router.get('/update/:getid', function (req, res) {
  models.User.findById(req.params.getid).then(function (data) {
    res.render('update',{
      id:data.id,
      firstname : data.firstname,
      lastname : data.lastname,
      phone : data.phone
    })
  })
})

router.post('/update', function (req, res) {
  models.User.findById(req.body.id).then(function (data) {
    data.update({
      firstname : req.body.firstname,
      lastname : req.body.lastname,
      phone : req.body.phone,
      updatedAt : new Date()
    }).then(function(){
      res.redirect('/server')
    })
  })
})

module.exports = router
