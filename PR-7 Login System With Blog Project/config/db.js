const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog-routes');

const connectDB = mongoose.connection;

db.on("connected", (err) => {
    if (err) {
        console.log(err);
        return false
    }
    console.log('DB Is Connected');
})

module.exports = connectDB;