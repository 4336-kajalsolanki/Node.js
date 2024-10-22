const express = require('express');

const routes = express.Router();

const { homePage } = require('../controllers/HomeController');

routes.get('/', homePage);

module.exports = routes;