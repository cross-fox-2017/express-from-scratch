'use strict'
var express = require('express')
var router = express.Router()
const db = require('../models')

router.get('/',function(req,res){
  db.User.findAll().then(function(users){
    res.render('pages/user', {title:'User List',use:users})
  })
});

router.post('/',function(req,res){
  db.User.create({first_name:req.body.fname,last_name:req.body.lname,phone:req.body.phone}).then(function(tes){
    res.redirect('/')
  })
});

router.get('/update/:id',function(req,res){
  db.User.findById(req.params.id).then(function(use){
    res.render('pages/update',{list:use})
    })
});

router.post('/updates',function(req,res){
  db.User.findById(req.body.id).then(function(use){
    use.update({first_name:req.body.fname,last_name:req.body.lname,phone:req.body.phone})
    res.redirect('/')
    })
});

router.get('/delete/:id',function(req,res){
  db.User.findById(req.params.id).then(function(use){
    use.destroy()
    res.redirect('/')
    })
});


module.exports=router
