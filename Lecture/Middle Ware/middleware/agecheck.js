const AgeCheck = (req, res, next) => {
    let age = req.query.age;
    if (age >= 18) {
        return next();
    } else {
        return res.redirect('/')
    }
}

const Role = (req, res, next) => {
    let role = req.query.role;
    if (role == "admin") {
        return next();
    }
    else {
        return res.redirect('/')
    }
}

module.exports = {
    AgeCheck, Role
}