const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.send("I love Hacktiv8");
})
module.exports = router;
