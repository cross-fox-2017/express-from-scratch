const express = require('express');
let apaindexxx = express()
const routeaja = require('./routes/index');

apaindexxx.use('/',routeaja)
apaindexxx.listen(1210)
