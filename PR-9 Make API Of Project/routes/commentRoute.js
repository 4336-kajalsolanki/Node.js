const express = require('express');

const routes = express.Router();

const { addComment, viewComment, deleteComment } = require('../controllers/CommentController');

const { verifyToken, Admin } = require('../middleware/Auth');

routes.post('/addcomment', verifyToken, Admin, addComment);
routes.get('/viewcomment', verifyToken, Admin, viewComment);
routes.delete('/deletecomment', verifyToken, Admin, deleteComment);

module.exports = routes;