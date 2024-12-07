const express = require('express');

const routes = express.Router();

const { subCategoryPage, addsubCategoryPage, insertSubcategory, viewSubcategory, deleteSubcategory, editSubcategory, updateSubcategory, changeStatus } = require('../controllers/SubCategoryController');

const passport = require('passport');

routes.get('/', passport.checkUser, subCategoryPage);
routes.get('/addsubcategory', passport.checkUser, addsubCategoryPage);
routes.post('/insertsubcategory', insertSubcategory);
routes.get('/viewsubcategory', viewSubcategory);
routes.get('/deletesubcategory', deleteSubcategory);
routes.get('/editsubcategory', editSubcategory);
routes.post('/updatesubcategory', updateSubcategory);
routes.get('/changestatus', changeStatus);

module.exports = routes;