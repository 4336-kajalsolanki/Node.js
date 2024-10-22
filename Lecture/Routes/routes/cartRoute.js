const express = require('express');

const { cartPage } = require('../controllers/CartController');

const routes = express.Router();

routes.get('/', cartPage);

module.exports = routes;