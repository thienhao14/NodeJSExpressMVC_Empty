const express = require('express');
const path = require('path');
const app = express();
let port = process.env.PORT || 9999;

app.get('/', require('./Controllers/HomeController').HomeController);
app.get('/HomeData', require('./Controllers/HomeController').HomeData);

app.use('/favicon.ico', express.static(path.join(__dirname, 'Statics/img/favicon.ico')));
app.use('/Assets', express.static(path.join(__dirname, 'Statics')));
const server = app.listen(port, function () {});