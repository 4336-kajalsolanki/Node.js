const express = require('express');

const routes = express.Router();

routes.use('/', require('./authRoute'));
routes.use('/category', require('./categoryRoute'));
routes.use('/subcategory', require('./subcategoryRoute'));
routes.use('/extrasubcategory', require('./extrasubcategoryRoute'));
routes.use('/product', require('./productRoute'));

module.exports = routes;