const express = require('express');

const routes = express.Router();

routes.use('/', require('./authRoute'));

routes.use('/user', require('./userRoute'));

routes.use('/blog', require('./blogRoute'));

routes.use('/admin', require('./adminRoute'));

routes.use('/comment', require('./commentRoute'));

module.exports = routes;