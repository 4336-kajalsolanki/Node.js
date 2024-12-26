const express = require('express');

const routes = express.Router();

routes.use('/', require('./authRoute'));

routes.use('/user', require('./userRoute'));

routes.use('/post', require('./postRoute'));

routes.use('/admin', require('./adminRoute'));

module.exports = routes;