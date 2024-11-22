const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog-route');

const db = mongoose.connection;

db.on("connected", (err) => {
    if (err) {
        console.log(err);
        return false
    }
    console.log('DB Is Connected');
})

module.exports = db;