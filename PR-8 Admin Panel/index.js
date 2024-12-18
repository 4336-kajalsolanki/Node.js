const express = require('express');

const port = 8020;

const app = express();

app.set('view engine', 'ejs');
 
const db = require('./config/db');

const path = require('path');

const cookieParser = require('cookie-parser');

const flash = require('connect-flash');

app.use(express.urlencoded());

app.use(express.json());

app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(cookieParser());

// Passport.js //
const passport = require('passport');
const passportLocal = require('./config/passportLocal');
const session = require('express-session');
app.use(session({
    secret: 'rnw3',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

app.use(passport.session());
app.use(passport.initialize());
app.use(passport.setUser);
app.use(flash());

app.use((req, res, next) => {
    res.locals.message = req.flash();
    return next();
})

app.use('/', require('./routes/indexRoute'));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Server Is Start On Port :- ${port}`);
})