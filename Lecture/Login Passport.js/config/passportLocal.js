const passport = require('passport');

const passportLocal = require('passport-local').Strategy;

const UserModel = require('../models/UserModel');

passport.use(new passportLocal({
    usernameField: 'email'
}, async (email, password, done) => {
    try {
        let users = await UserModel.findOne({ email: email })

        if (!users || users.password !== password) {
            console.log("Email And Password Is Not Match");
            return done(null, false)
        }
        return done(null, users);
    } catch (err) {
        console.log(err);
        return false;
    }
}))

passport.serializeUser((user, done) => {
    return done(null, user._id)
})

passport.deserializeUser(async (id, done) => {
    try {
        let user = await UserModel.findById(id);
        done(null, user)
    } catch (err) {
        console.log(err);
        return false;
    }
})

passport.checkUser = (req, res, next) => {
    // console.log(req.isAuthenticated());
    if (!req.isAuthenticated()) {
        return res.redirect('/')
    }
    return next();
}

passport.setUser = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.locals.user = req.user;
    }
    return next();
}

module.exports = passport;