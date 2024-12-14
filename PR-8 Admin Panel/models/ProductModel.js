const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
    },
    subcategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subcategory",
    },
    extrasubcategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "extrasubcategory",
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "deactive"
    }
})

const product = mongoose.model('product', productSchema);

module.exports = product;