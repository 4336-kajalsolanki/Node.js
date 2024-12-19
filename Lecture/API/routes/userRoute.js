const express = require('express');

const routes = express.Router();

const { addUser, viewUser, deleteUser, updateUser } = require('../controllers/UserController');

routes.post('/adduser', addUser);
routes.get('/viewuser', viewUser);
routes.delete('/deleteuser', deleteUser);
routes.put('/updateuser', updateUser);

module.exports = routes;