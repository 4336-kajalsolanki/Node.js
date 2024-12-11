const express = require('express');

const routes = express.Router();

const { viewExtrasubcategoryPage, addExtrasubcategoryPage, insertExtraSubcategory, deleteExtraSubcategory, editExtraSubcategory, updateExtraSubcategory, ChangeStatus, ajaxGetCategory } = require('../controllers/ExtraSubCategoryController');

const passport = require('passport');

routes.get('/', passport.checkUser, viewExtrasubcategoryPage);
routes.get('/addextrasubcategorypage', passport.checkUser, addExtrasubcategoryPage);
routes.post('/insertextrasubcategory', insertExtraSubcategory);
routes.get('/deleteextrasubcategory', deleteExtraSubcategory);
routes.get('/editextrasubcategory', editExtraSubcategory);
routes.post('/updateextrasubcategory', updateExtraSubcategory);
routes.get('/changestatus', ChangeStatus);
routes.get('/ajaxgetcategory', ajaxGetCategory)

module.exports = routes;