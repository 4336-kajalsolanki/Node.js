const express = require('express');

const { productPage } = require('../controllers/ProductController');

const routes = express.Router();

routes.get('/', productPage);

module.exports = routes;