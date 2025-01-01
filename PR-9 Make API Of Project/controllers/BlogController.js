const BlogModel = require('../models/BlogModel');

const path = require('path');
const fs = require('fs');

const addBlog = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description || !req.file) {
            return res.status(400).send({
                success: false,
                message: "All Field Is Required",
                blog
            })
        }
        const blog = await BlogModel.create({
            userid: req.user._id,
            title: title,
            description: description,
            image: req.file.path
        })
        return res.status(200).send({
            success: true,
            message: "Blog Successfully Create",
            blog
        })
    } catch (err) {
        return res.status(501).send({
            success: false,
            err: err
        })
    }
}

const viewBlog = async (req, res) => {
    try {
        const blogs = await BlogModel.find({ userid: req.user._id }).populate('userid')
        return res.status(200).send({
            success: true,
            message: "Blogs Successfully Fetch",
            blogs
        })
    } catch (err) {
        return res.status(501).send({
            success: false,
            err: err
        })
    }
}

const deleteBlog = async (req, res) => {
    try {
        let id = req.query.id;
        let single = await BlogModel.findById(id);
        fs.unlinkSync(single.image);
        await BlogModel.findByIdAndDelete(id);
        return res.status(200).send({
            success: true,
            message: "Blog Successfully Delete",
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const updateBlog = async (req, res) => {
    try {
        const { userid, title, description } = req.body;
        if (!title || !description || !req.file) {
            return res.status(500).send({
                success: false,
                message: "All Field Is Required.",
            })
        }
        let single = await BlogModel.findById(userid);
        fs.unlinkSync(single.image);
        await BlogModel.findByIdAndUpdate(userid, {
            userid: req.user._id,
            title: title,
            description: description,
            image: req.file.path
        });
        return res.status(200).send({
            success: true,
            message: "Blog Successfully Update",
        })
    } catch (err) {
        return res.status(501).send({
            success: false,
            err: err
        })
    }
}

module.exports = {
    addBlog, viewBlog, deleteBlog, updateBlog
}