"use strict"

const express = require('express');
let app       = express.Router();
let models    = require('../models')

app.get('/', function(req, res){
  models.User.findAll({raw:true}).then(function(data){
    res.render('table', {title: 'User List', dataUser: data});
  })

})

app.post('/', function(req, res){
  models.User.create(
    {
      firstname : req.body.firstname,
      lastname:req.body.lastname,
      phone:req.body.phone
    }).then(function(data){
      res.redirect('/');
  })
})

app.get('/update/:id',function(req,res){
  // let id = req.param('id')
  let id = req.params.id
  models.User.findById(id).then(function(data){
    res.render('update',{data:data})
  })
})
app.post('/doUpdate',function(req,res){
  let id = req.body.data_id
  models.User.findById(id).then(function(data){
    if(data){
      data.updateAttributes(
        {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          phone: req.body.phone
        })
    }
      res.redirect('/')
  })
})

app.get('/delete/:id',function(req,res){
  let id = req.params.id
  models.User.findById(id).then(function(data){
    if(data){
      data.destroy({
        where:{
          data:req.body.id
        }
      })
    }
      res.redirect('/')
  })
})

module.exports = app;
