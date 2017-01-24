const express = require('express');
 let apaindex = express.Router()

apaindex.get('/', function (req,res){
  res.send('================H8')
})

module.exports = apaindex
