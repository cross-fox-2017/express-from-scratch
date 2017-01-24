var express = require('express');
var router = express.Router();
const models = require('../models');

router.get('/', function(request, response) {
  models.User.findAll({raw: true}).then(function (user) {
    response.render('index', {userData: user})
  })
});

router.post('/add', function (request, response){
  models.User.create({
    firstname: request.body.firstname,
    lastname: request.body.lastname,
    phone: request.body.phone,
    createdAt: new Date()
  }).then(function (user) {
    response.redirect('/')
  })
})
router.get('/update/:id', function (request,response,next){
  models.User.findById(request.params.id).then(function (user) {
    response.render("/update", {userData: user})
  })
})

router.post('/update', function (request, response){
  models.User.findById(request.body.id).then(function (user) {
    user.update({
      firstname: request.body.firstname,
      lastname: request.body.lastname,
      phone: request.body.phone
    }).then(function(){
      response.redirect('/')
    })
  })
})

router.get('/delete/:id', function(request, response) {
  models.User.destroy({
    where: {
      id: request.params.id
    }
  })
  response.redirect('/')
});


module.exports = router;
