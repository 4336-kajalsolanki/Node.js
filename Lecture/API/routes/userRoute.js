const express = require('express');

const routes = express.Router();

const { addUser } = require('../controllers/UserController');

routes.post('/adduser', addUser);

module.exports = routes;