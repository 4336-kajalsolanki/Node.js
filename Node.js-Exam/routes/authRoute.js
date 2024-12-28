const express = require('express');

const { LoginPage, RegisterPage, registerUser, Showcrud, loginUser, Logout } = require('../controllers/AuthController');

const routes = express.Router();

const passport = require('passport');

routes.get('/', LoginPage);
routes.get('/register', RegisterPage)
routes.get('/admin', passport.checkUser, Showcrud);
routes.post('/registerUser', registerUser);
routes.post('/loginUser', passport.authenticate('local', { failureRedirect: '/' }), loginUser);
routes.get('/logout', Logout);

module.exports = routes;