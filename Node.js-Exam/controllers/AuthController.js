const UserModel = require('../models/AuthModel');

const CrudModel = require('../models/CrudModel');

const LoginPage = (req, res) => {
  if (res.locals.users) {
    return res.redirect('/admin')
  }
  return res.render('login')
}

const RegisterPage = (req, res) => {
  return res.render('register')
}

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    UserModel.create({
      name: name,
      email: email,
      password: password
    });
    console.log("User Register!!!!");
    return res.redirect('/');
  } catch (err) {
    console.log(err);
    return false;
  }
}

const loginUser = async (req, res) => {
  res.redirect('/admin')
}

const Showcrud = async (req, res) => {
  try {
    const crud = await CrudModel.find()
    res.render('Showcrud', { crud: crud })
  } catch (err) {
    console.log(err);
    return false;
  }
}

const Logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      console.log(err);
      return false
    }
    return res.redirect('/')
  })
}

module.exports = {
  LoginPage, RegisterPage, Showcrud, registerUser, loginUser, Logout
}