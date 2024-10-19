const express = require('express');

const port = 9850;

const app = express();

const db = require('./config/db');

app.set('view engine', 'ejs');

const User = require('./models/UserModel')

app.use(express.urlencoded());

const multer = require('multer');

const path = require('path');

const fs = require("fs");

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const st = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "uploads")
    },
    filename: (req, file, cb) => {
        const uniq = Math.floor(Math.random() * 100000);
        cb(null, `${file.fieldname} - ${uniq}`);
    },
});

const fileUpload = multer({ storage: st }).single('avtar');

app.get('/', (req, res) => {
    User.find({})
        .then((data) => {
            return res.render('view', {
                record: data
            });
        })
        .catch((err) => {
            console.log(err);
            return false;
        });
});

app.get('/add', (req, res) => {
    return res.render('add');
});

const UserModel = require('./models/UserModel');

app.get('/', (req, res) => {
    return res.render('view')
})

app.post('/insertRecord', fileUpload, (req, res) => {
    const { name, email, password, gender, hobby, city, phone } = req.body;
    User.create({
        name: name,
        email: email,
        password: password,
        gender: gender,
        hobby: hobby,
        city: city,
        phone: phone,
        image: req.file.path
    }).then((data, err) => {
        if (err) {
            console.log(err);
            return false
        }
        console.log(`Record Add`);
        return res.redirect('/add');
    });
});

app.get('/editRecord', (req, res) => {
    let id = req.query.Id;

    User.findById(id)
        .then((single) => {
            return res.render("edit", {
                data: single,
            });
        })
        .catch((err) => {
            console.log(err);
            return false;
        });
});

app.get('/deleteRecord', (req, res) => {
    let id = req.query.deleteId;
    User.findById(id)
        .then((single) => {
            fs.unlinkSync(single.image);
            User.findByIdAndDelete(id)
                .then((data) => {
                    console.log("User Delete");
                    return res.redirect('/');
                })
                .catch((err) => {
                    console.log(err);
                    return false;
                });

        })
        .catch((err) => {
            console.log(err);
            return false;
        });
});

app.post('/updateRecord', fileUpload, (req, res) => {
    const { editid, name, email, password, gender, hobby, city, phone } = req.body;
    console.log(name, email, password, gender, hobby, city, phone);

    if (req.res) {
        // Old File Remove //
        User.findById(editid)
            .then((single) => {
                fs.unlinkSync(single.image);
            })
            .catch((err) => {
                console.log(err);
                return false;
            });
        // New File Add //
        User.findByIdAndUpdate(editid, {
            name: name,
            email: email,
            password: password,
            gender: gender,
            hobby: hobby,
            city: city,
            phone: phone,
            image: req.file.path
        })
            .then((data) => {
                console.log("User Update");
                return res.redirect('/');
            })
            .catch((err) => {
                console.log(err);
                return false;
            });
    } else {
        User.findById(editid)
            .then((single) => {
                User.findByIdAndUpdate(editid, {
                    name: name,
                    email: email,
                    password: password,
                    gender: gender,
                    hobby: hobby,
                    city: city,
                    phone: phone,
                    image: single.image
                })
                    .then((data) => {
                        console.log("record update");
                        return res.redirect("/");
                    })
                    .catch((err) => {
                        console.log(err);
                        return false;
                    });
            })
            .catch((err) => {
                console.log(err);
                return false;
            });
    }
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false
    }
    console.log(`Server Is Start On Port :- ${port}`);
})