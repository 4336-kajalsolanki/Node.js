const express = require('express');

const routes = express.Router();

const { subCategoryPage, addsubCategoryPage, insertSubcategory, viewSubcategory, editSubcategory } = require('../controllers/SubCategoryController');

const passport = require('passport');

routes.get('/',passport.checkUser,subCategoryPage);
routes.get('/addsubcategory',passport.checkUser,addsubCategoryPage)
routes.post('/insertsubcategory',insertSubcategory)
routes.get('/viewcategory',viewSubcategory)
routes.get('/editsubcategory',editSubcategory)

module.exports = routes;