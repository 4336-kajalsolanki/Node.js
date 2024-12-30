const express = require('express');

const port = 4000;

const app = express();

const db = require('./config/db');

const path = require('path');

app.use(express.json());

const cors = require('cors');
app.use(cors());

app.use(express.urlencoded());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/', require('./routes/indexRoute'));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Server Is Start On Port :- ${port}`);
})