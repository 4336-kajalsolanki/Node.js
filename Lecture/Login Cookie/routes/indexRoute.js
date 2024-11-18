const express = require('express');

const routes = express.Router();

const { loginPage, registerPage, registerUser, loginUser, dashboardPage, logoutUser } = require('../controllers/AuthController');

routes.get('/', loginPage)
routes.get('/register', registerPage)
routes.post('/registeruser', registerUser)
routes.post('/loginuser', loginUser)
routes.get('/dashboard', dashboardPage)
routes.get('/logoutuser', logoutUser)

module.exports = routes;