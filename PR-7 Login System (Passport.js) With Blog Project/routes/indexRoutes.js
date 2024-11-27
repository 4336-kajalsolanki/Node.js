const express = require('express')

const routes = express.Router();

routes.use('/', require('./authRoutes'))
routes.use('/', require('./blogRoutes'))

module.exports = routes;