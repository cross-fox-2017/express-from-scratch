'use strict'

let express = require ('express')
let router = express.Router()
let model = require ('../models')
let user = model.User

// GET
router.get('/', function (request, response) {
  user.findAll().then(function (data) {
    response.render('user', {title: "user list", result: data})
  })
})

//POST
router.post('/',function(req,res){
  user.create({firstname:req.body.firstname,lastname:req.body.lastname,phone:req.body.phone}).then(function(tes){
    res.redirect('/')
  })
});

//PUT
router.get('/update/:id', function (req,res) {
  let id = req.params.id
  user.findById(id).then(function (data) {
    res.render('update',{update: data})
  })
})

router.post('/updated',function(req,res){
  let id = req.body.id
  user.findById(id).then(function (data){
    if(data){
      data.updateAttributes({firstname:req.body.firstname,lastname:req.body.lastname,phone:req.body.phone})
    }
    res.redirect('/')
    })
  })

// DELETE
router.get('/delete/:id',function(req,res){
  user.findById(req.params.id).then(function(use){
    use.destroy().then(function(){
      res.redirect('/')
    })
  })
})
module.exports = router
