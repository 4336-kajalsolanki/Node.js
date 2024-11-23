const UserModel = require('../models/UserModel');
const loginPage = (req, res) => {
    if (res.locals.user) {
        return res.redirect('/dashboard')
    }
    return res.render('login')
}

const registerPage = (req, res) => {
    return res.render('register')
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        await UserModel.create({
            name: name,
            email: email,
            password: password
        })
        console.log("user create");
        return res.redirect('/')
    } catch (err) {
        console.log(err);
        return false;
    }
}

const loginUser = (req, res) => {
    return res.redirect('/dashboard')
}

const dashboardPage = (req, res) => {
    return res.render('dashboard')
}

const logoutUser = (req, res) => {
    req.logout((err) => {
        if (err) {
            console.log(err);
            return false;
        }
        return res.redirect('/')
    })
}

const contactPage = (req, res) => {
    return res.render('contact')
}

module.exports = {
    loginPage, registerPage, registerUser, loginUser, dashboardPage, logoutUser, contactPage
}