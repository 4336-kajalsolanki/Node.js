const express = require('express');

const routes = express.Router();

const { loginPage, registerPage, registerUser, loginUser, dashboardPage, logoutUser, forgotPassword, otpPage, postOtp, newpass, postNewpassword, myProfile, profileChange, changePassword, postChangepassword } = require('../controllers/AuthController');

const passport = require('passport');

routes.get('/', loginPage)
routes.get('/register', registerPage)
routes.post('/registeruser', registerUser);
routes.post('/loginuser', passport.authenticate('local', { failureRedirect: '/' }), loginUser)
routes.get('/dashboard', passport.checkUser, dashboardPage);
routes.get('/logoutuser', logoutUser)

// Forgot Password //
routes.post('/forgotpassword', forgotPassword)
routes.get('/otp', otpPage)
routes.post('/postotp', postOtp)
routes.get('/newpass', newpass)
routes.post('/postnewpassword', postNewpassword)

// My Profile //
routes.get('/myprofile', myProfile)
routes.post('/profilechange', profileChange)

// Change Password //
routes.get('/changepassword', changePassword)
routes.post('/postChangepassword',)

module.exports = routes;