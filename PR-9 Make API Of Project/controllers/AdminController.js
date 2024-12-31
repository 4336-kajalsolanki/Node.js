const BlogModel = require('../models/BlogModel');

const AllBlogShow = async (req, res) => {
    try {
        let blogs = await BlogModel.find({}).populate('userid');
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

module.exports = {
    AllBlogShow
}