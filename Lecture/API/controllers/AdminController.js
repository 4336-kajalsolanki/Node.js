const PostModel = require('../models/PostModel');

const allPost = async (req, res) => {
    try {
        let posts = await PostModel.find({}).populate('userid');
        return res.status(200).send({
            success: true,
            message: "Post Successfully Fetch",
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
    allPost
}