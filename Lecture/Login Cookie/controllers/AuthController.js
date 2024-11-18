const UserModel = require('../models/UserModel');

const registerPage = (req, res) => {
    return res.render('register')
}

const loginPage = (req, res) => {
    if (req.cookies['auth']) {
        return res.redirect('/dashboard');
    }
    return res.render('login')
}

const dashboardPage = (req, res) => {
    //cookie get req.cookies['key name'];
    if (!req.cookies['auth']) {
        return res.redirect('/');
    }
    return res.render('dashboard')
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        await UserModel.create({
            name: name,
            email: email,
            password: password
        })
        console.log("Successfully Register");
        return res.redirect('/')
    } catch (err) {
        console.log(err);
        return false;
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email: email });
        if (!user || user.password !== password) {
            console.log("Email And Password Not Valid");
            return res.redirect('/');
        }
        res.cookie('auth', user);//cookie set
        return res.redirect('/dashboard')
    } catch (err) {
        console.log(err);
        return false;
    }
}

const logoutUser = (req, res) => {
    res.clearCookie('auth');
    return res.redirect('/');

}

module.exports = {
    registerPage, loginPage, registerUser, loginUser, dashboardPage, logoutUser
}