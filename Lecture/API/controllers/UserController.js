const UserModel = require('../models/UserModel');

const demoResponse = (req, res) => {
    return res.status(200).send({
        success: true,
        message: "All Done"
    })
}

const addUser = async (req, res) => {
    try {
        const { name, email, password, city, phone } = req.body;
        if (!name || !email || !password || !city || !phone) {
            return res.status(500).send({
                success: false,
                message: "All Field Is Required.",
            })
        }

        let duplicate = await UserModel.findOne({ email: email });
        console.log(duplicate);

        if (duplicate) {
            return res.status(200).send({
                success: false,
                message: "User Is Already Register",
            })
        }

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

const viewUser = async (req, res) => {
    try {
        let users = await UserModel.find({});
        return res.status(200).send({
            success: true,
            message: "User Successfully Fetch",
            data: users,
            userslength: users.length
        })
    } catch (err) {
        return res.status(501).send({
            success: false,
            err: err
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        let id = req.query.id;
        await UserModel.findByIdAndDelete(id);
        return res.status(200).send({
            success: true,
            message: "User Successfully Delete",
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const updateUser = async (req, res) => {
    try {
        const { id, name, email, password, city, phone } = req.body;
        if (!name || !email || !password || !city || !phone) {
            return res.status(500).send({
                success: false,
                message: "All Field Is Required.",
            })
        }
        await UserModel.findByIdAndUpdate(id, {
            name: name,
            email: email,
            password: password,
            city: city,
            phone: phone
        });
        return res.status(200).send({
            success: true,
            message: "User Successfully Update",
            user,
        })
    } catch (err) {
        return res.status(501).send({
            success: false,
            err: err
        })
    }
}

module.exports = {
    demoResponse, addUser, viewUser, deleteUser, updateUser
}