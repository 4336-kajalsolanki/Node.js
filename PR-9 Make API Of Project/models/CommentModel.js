const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    blogid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "blog"
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    comment: {
        type: String,
        required: true,
    }
})

const comment = mongoose.model('comment', commentSchema);

module.exports = comment;