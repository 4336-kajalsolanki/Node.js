const express = require('express');

const routes = express.Router();

const { productPage, addProductPage, insertProduct, deleteProduct, editProduct, updateProduct, ChangeStatus, ajaxGetCategory, ajaxSubcategoryWiseRecord, } = require('../controllers/ProductController');

const path = require('path');

const multer = require('multer');

const st = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        const uniq = Math.floor(Math.random() * 100000);
        cb(null, `${file.fieldname}-${uniq}`);
    }
})

const upload = multer({ storage: st }).single('image');

routes.get('/', productPage);
routes.get('/addproduct', addProductPage);
routes.post('/insertproduct', upload, insertProduct);
routes.get('/deleteproduct', deleteProduct);
routes.get('/editproduct', editProduct);
routes.post('/updateproduct', upload, updateProduct);
routes.get('/changestatus', ChangeStatus);
routes.get('/ajaxgetcategory', ajaxGetCategory);
routes.get('/ajaxsubcategorywiserecord', ajaxSubcategoryWiseRecord);

module.exports = routes;