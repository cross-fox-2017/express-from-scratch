const express = require('express');
let router = express.Router();
const models = require('../models');
var user = models.User;

router.get('/', function(req, res) {
  user.findAll().then(function(result){
    res.render('index', {result: result, title: "User List"})
  })
});

router.post('/create', function(req, res) {
  user.create({firstname: req.body.firstname, lastname: req.body.lastname, phone: req.body.phone, createdAt: new Date(), updatedAt: new Date()}).then(function(result){
    res.redirect('/')
  })
});

router.get('/delete/:id',function(req,res){
  user.findById(req.params.id).then(function(use){
    use.destroy()
    res.redirect('/')
    })
});

router.get('/update/:id',function(req,res){
  user.findById(req.params.id).then(function(use){
    res.render('update',{list:use})
    })
});

router.post('/updated',function(req,res){
  user.findById(req.body.id).then(function(use){
    use.update({firstname:req.body.firstname,lastname:req.body.lastname,phone:req.body.phone,updatedAt: new Date()})
    res.redirect('/')
    })
});

module.exports = router;
