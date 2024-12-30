const express = require('express');

const routes = express.Router();

const { addComment } = require('../controllers/CommentController');

const { verifyToken, Admin } = require('../middleware/Auth');

routes.post('/addcomment', verifyToken, Admin, addComment);

module.exports = routes;