const express = require('express');

const routes = express.Router();

const { AllBlogShow } = require('../controllers/AdminController');

const { verifyToken, Admin } = require('../middleware/Auth');

routes.get('/allblogshow', verifyToken, Admin, AllBlogShow);

module.exports = routes;