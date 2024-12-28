const CrudModel = require('../models/CrudModel');

const fs = require('fs');

const path = require('path');

const Addcrud = (req, res) => {
    return res.render("Addcrud")
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

const insertCrud = async (req, res) => {
    try {
        const { name, price, qty, description } = req.body
        CrudModel.create({
            name: name,
            price: price,
            qty: qty,
            description: description,
            image: req.file.path
        })
        console.log("Add Successsfully");
        return res.redirect('/admin')
    } catch (err) {
        console.log(err);
        return false
    }
}

const deleteCrud = async (req, res) => {
    try {
        const deid = req.query.deleteId;
        let single = await CrudModel.findById(deid);
        fs.unlinkSync(single.image);
        await CrudModel.findByIdAndDelete(deid);
        console.log("User Deleted");
        return res.redirect('/admin')
    } catch (err) {
        console.log(err);
        return false;
    }
}

const Editcrud = async (req, res) => {
    try {
        const eid = req.query.editId
        const single = await CrudModel.findById(eid)
        return res.render('Editcrud', {
            single
        }
        )
    } catch (error) {
        console.log(error);
        return false;
    }
}

const UpdateCrud = async (req, res) => {
    try {
        const { editid, name, price, qty, description } = req.body;
        if (req.file) {
            const single = await CrudModel.findById(editid);
            fs.unlinkSync(single.image);
            await CrudModel.findByIdAndUpdate(editid, {
                name: name,
                price: price,
                qty: qty,
                description: description,
                image: req.file.path
            })
            console.log("User Updated");
            return res.redirect('/admin')
        } else {
            const single = await CrudModel.findById(editid);
            await CrudModel.findByIdAndUpdate(editid, {
                name: name,
                price: price,
                qty: qty,
                description: description,
                image: single.image
            })
            console.log("User Updated");
            return res.redirect('/admin')
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const readMore = async (req, res) => {
    try {
        let id = req.query.id;
        let single = await CrudModel.findById(id)
        return res.render('readmore', {
            single
        })
    } catch (err) {
        console.log(err);
        return false
    }
}

module.exports = {
    Addcrud, Showcrud, insertCrud, deleteCrud, Editcrud, UpdateCrud, readMore
}