const express = require('express');

const routes = express.Router();

routes.use('/', require('./authRoute'));

routes.use('/', require('./crudRoute'));

module.exports = routes;