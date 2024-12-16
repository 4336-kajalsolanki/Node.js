const express = require('express');

const routes = express.Router();

const { demoResponse, addUser, viewUser } = require('../controllers/UserController');

routes.get('/', demoResponse);
routes.post('/adduser', addUser);
routes.get('/viewuser', viewUser);

module.exports = routes;