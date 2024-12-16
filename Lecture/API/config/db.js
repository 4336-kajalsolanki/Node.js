const mongoose = require('mongoose');

const con = mongoose.connect(``);

const db = mongoose.connection;

db.on("connected", (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Database Successfully Connected`);
})

module.exports = db;