const express = require('express');

const routes = express.Router();

routes.use('/home', require('./homeRoute'));

routes.use('/product', require('./productRoute'));

routes.use('/cart', require('./cartRoute'));

module.exports = routes;