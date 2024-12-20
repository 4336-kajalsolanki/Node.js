const mongoose = require('mongoose');

const con = mongoose.connect(`mongodb+srv://kajalsolanki:kajal@cluster0.ctxvl.mongodb.net/api`);

const db = mongoose.connection;

db.on("connected", (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Database Successfully Connected`);
})

module.exports = db;
