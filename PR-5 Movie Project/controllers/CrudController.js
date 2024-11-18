const UserModel = require('../models/UserModel');

const fs = require('fs');

const formPage = (req, res) => {
    return res.render('form');
}
const addRecord = async (req, res) => {
    try {
        const { movieName, price, description } = req.body;
        await UserModel.create({
            movieName: movieName,
            Price: price,
            Description: description,
            Image: req.file.path
        })
        console.log(`User Add`);
        return res.redirect('/viewRecord');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const viewData = async (req, res) => {
    try {
        let users = await UserModel.find({});
        return res.render('view', {
            users
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}

const deleteData = async (req, res) => {
    try {
        let id = req.query.id;
        let single = await UserModel.findById(id);
        fs.unlinkSync(single.Image);
        await UserModel.findByIdAndDelete(id);
        console.log(`User Delete`)
        return res.redirect('/viewRecord');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const editrecord = async (req, res) => {
    try {
        let id = req.query.id;
        let single = await UserModel.findById(id);
        return res.render('edit', {
            single
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const updateData = async (req, res) => {
    try {
        const { editid, movieName, Price, Description } = req.body;
        if (req.file) {
            let single = await UserModel.findById(editid);
            fs.unlinkSync(single.Image);
            let Update = await UserModel.findByIdAndUpdate(editid, {
                movieName: movieName,
                Price: Price,
                Description: Description,
                Image: req.file.path
            })
            console.log("Record Update");
            return res.redirect('/viewRecord');
        } else {
            let single = await UserModel.findById(editid);
            let Update = await UserModel.findByIdAndUpdate(editid, {
                movieName: movieName,
                Price: Price,
                Description: Description,
                Image: single.Image
            })
            console.log("Record Update");
            return res.redirect('/viewRecord');
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    formPage, addRecord, viewData, deleteData, editrecord, updateData
}