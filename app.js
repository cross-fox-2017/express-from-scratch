const express = require('express');
let app = express()
const routes = require('./routes/index');
app.use('/', routes);

app.listen(3000)
