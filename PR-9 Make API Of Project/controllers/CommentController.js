const CommentModel = require('../models/CommentModel');
const BlogModel = require('../models/BlogModel');

const addComment = async (req, res) => {
    try {
        const blogid = req.query.id;
        const blog = await BlogModel.findOne({ id: blogid });
        console.log(blog);
        if (!blog) {
            return res.status(404).send({
                success: false,
                message: "Blog Is Not Found!",
            });
        }
        const { comment } = req.body;
        const commentData = await CommentModel.create({
            blogid: blog,
            comment: comment
        });
        return res.status(200).send({
            success: true,
            message: "Comment Successfully Added.",
            commentData
        });
    } catch (err) {
        return res.status(501).send({
            success: false,
            err: err
        });
    }
}

const viewComment = async (req, res) => {
    try {
        const YourComment = await CommentModel.find({})
        .populate('userid', 'name email')
        .populate('blogid', 'title description');
        return res.status(200).send({
            success: true,
            message: "Your Comment Successfully Fatched.",
            YourComment
        })
    } catch (err) {
        return res.status(400).send({
            success: false,
            message: err.message
        });
    }
}

const deleteComment = async (req, res) => {
    try {
        const id = req.query.id;
        let comment = await CommentModel.findById(id);
        let deletecomment = await CommentModel.findByIdAndDelete(id);
        return res.status(200).send({
            success: true,
            message: "Comment Successfully Deleted.",
            deletecomment
        });
    }
    catch (err) {
        return res.status(400).send({
            success: false,
            message: err
        });
    }
}

module.exports = {
    addComment, viewComment, deleteComment
}