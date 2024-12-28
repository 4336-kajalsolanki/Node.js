const express = require('express');

const port = 9100;

const app = express();

app.set('view engine', 'ejs');

const db = require('./config/db');

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded());

app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, "uploads")));

const passport = require('passport');

const session = require('express-session');

const passportLocal = require('./config/passportLocal');

app.use(session({
    secret: 'rnw3',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setUser);

app.use('/', require('./routes/indexRoute'));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Server Is Running On Port :- ${port}`);
})