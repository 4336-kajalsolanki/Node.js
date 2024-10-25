const express = require('express');

const routes = express.Router();

const { formPage, addRecord, viewData, deleteData, editrecord, updateData } = require('../controllers/CrudController');

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

const upload = multer({ storage: st }).single('avatar')

routes.get('/', formPage);
routes.post('/insertRecord', upload, addRecord);
routes.get('/viewRecord', viewData);
routes.get('/deleteRecord', deleteData);
routes.get('/editRecord', editrecord);
routes.post('/updateRecord', upload, updateData);

module.exports = routes;