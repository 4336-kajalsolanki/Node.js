const PostModel = require('../models/PostModel');

const addPost = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description || !req.file) {
            return res.status(400).send({
                success: false,
                message: "All Field Is Required",
                post
            })
        }
        const post = await PostModel.create({
            userid: req.user._id,
            title: title,
            description: description,
            image: req.file.path
        })
        return res.status(200).send({
            success: true,
            message: "Post Successfully Create",
            post
        })
    } catch (err) {
        return res.status(501).send({
            success: false,
            err: err
        })
    }
}

const viewPost = async (req, res) => {
    try {
        const posts = await PostModel.find({ userid: req.user._id }).populate('userid')
        return res.status(200).send({
            success: true,
            message: "Posts Successfully Fetch",
            posts
        })
    } catch (err) {
        return res.status(501).send({
            success: false,
            err: err
        })
    }
}

module.exports = {
    addPost, viewPost
}