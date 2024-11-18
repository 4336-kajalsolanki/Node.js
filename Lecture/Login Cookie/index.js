const express = require('express');

const app = express();

const port = 6050;

const database = require('./config/db');

app.set('view engine', 'ejs');

const cookieParser = require('cookie-parser');

app.use(express.urlencoded());

app.use(cookieParser());

app.use('/', require('./routes/indexRoute'));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Server Is Start On Port :- ${port}`);
})