const express = require('express');

const routes = express.Router();

const { registerUser, viewUser, deleteUser, updateUser } = require('../controllers/UserController');

const { verifyToken, Admin } = require('../middleware/Auth');

routes.post('/registeruser', registerUser);
routes.get('/viewuser', verifyToken, Admin, viewUser);
routes.delete('/deleteuser', verifyToken, Admin, deleteUser);
routes.put('/updateuser', verifyToken, Admin, updateUser);

module.exports = routes;