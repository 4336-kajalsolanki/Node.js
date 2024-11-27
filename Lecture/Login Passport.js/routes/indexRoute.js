const express = require('express');

const routes = express.Router();

const { loginPage, registerPage, registerUser, loginUser, dashboardPage,logoutUser,contactPage } = require('../controllers/AuthController');

const passport = require('passport');

routes.get('/', loginPage)
routes.get('/register', registerPage)
routes.post('/registeruser', registerUser)
routes.post('/loginuser', passport.authenticate('local', { failureRedirect: '/' }), loginUser)
routes.get('/dashboard', passport.checkUser, dashboardPage)
routes.get('/logoutuser', logoutUser)
routes.get('/con', contactPage);

module.exports = routes;