const express = require('express');

const routes = express.Router();

const { demoResponse, addUser, viewUser, deleteUser, updateUser } = require('../controllers/UserController');

routes.get('/', demoResponse);
routes.post('/adduser', addUser);
routes.get('/viewuser', viewUser);
routes.delete('/deleteuser', deleteUser);
routes.put('/updateuser', updateUser);

module.exports = routes;