const express = require('express');

const port = 9600;

const app = express();

app.set('view engine', 'ejs');

const db = require('./config/db');

const path = require('path');

app.use(express.urlencoded());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/', require('./routes/indexRoute'));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Server Start On Port :- ${port}`);
})