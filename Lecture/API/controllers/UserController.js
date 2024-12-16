const UserModel = require('../models/UserModel');

const addUser = async (req, res) => {
    try {
        const { name, email, password, city, phone } = req.body;
        let user = await UserModel.create({
            name: name,
            email: email,
            password: password,
            city: city,
            phone: phone
        })
        return res.status(200).send({
            success: true,
            message: "User Successfully Create",
            user
        })
    } catch (err) {
        return res.status(501).send({
            success: false,
            err: err
        })
    }
}

module.exports = {
    addUser
}