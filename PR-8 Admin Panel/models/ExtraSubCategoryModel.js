const mongoose = require('mongoose');

const extrasubcategorySchema = mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
    },
    subcategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subcategory",
    },
    extrasubcategory: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "deactive"
    }
})

const extrasubcategory = mongoose.model('extrasubcategory', extrasubcategorySchema);

module.exports = extrasubcategory;