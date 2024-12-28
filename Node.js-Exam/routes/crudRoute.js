const express = require('express');

const routes = express.Router();

const { Addcrud, Showcrud, insertCrud, deleteCrud, Editcrud, UpdateCrud, readMore } = require('../controllers/CrudController');

const multer = require('multer');
const st = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        const uniqname = Date.now();
        cb(null, `${file.fieldname}-${uniqname}`);
    }
})
const fileUpload = multer({ storage: st }).single('image');

routes.get('/add', Addcrud);
routes.get('/admin', Showcrud);
routes.post('/insertcrud', fileUpload, insertCrud);
routes.get('/deletecrud', deleteCrud);
routes.get('/editcrud', Editcrud);
routes.post('/Updatecrud', fileUpload, UpdateCrud);
routes.get('/readmore', readMore);

module.exports = routes;