const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    movieName: {
        type: String,
        required: true,
    },
    Price: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    Image: {
        type: String,
        required: true,
    }
})

const user = mongoose.model('user',userSchema);

module.exports = user;