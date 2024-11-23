const express = require('express');

const port = 9100;

const app = express();

const db = require('./config/db');

app.set('view engine', 'ejs');

const passport = require('passport');
const passportLocal = require('./config/passportLocal');
const session = require('express-session');//session require

app.use(session({ //session set
    secret:'kajal',
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:1000*60*60*24 // 1 day
    }
}))

app.use(passport.session());
app.use(passport.initialize());
app.use(passport.setUser);

app.use(express.urlencoded());
app.use('/', require('./routes/indexRoute'));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server is start on port :- ${port}`);

})