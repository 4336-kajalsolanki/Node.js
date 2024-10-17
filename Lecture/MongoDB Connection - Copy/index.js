const express = require('express');

const port = 9850;

const app = express();

const db = require('./config/db');

app.set('view engine', 'ejs');

const User = require('./models/UserModel')

app.use(express.urlencoded());

const multer = require('multer');

const path = require('path')

app.use("/Uploads",express.static(path.join(__dirname,"uploads")))

const storage = multer.diskStorage({
    destination:(req, res, cb) => {
      cb(null, "uploads")
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })


app.get('/', (req, res) => {
    User.find({})
        .then((data) => {
            return res.render('view', {
                record: data
            })
        }).catch((err) => {
            console.log(err);
            return false;
        })
})
app.get('/add', (req, res) => {
    return res.render('add')
})

const UserModel = require('./models/UserModel');

app.get('/', (req, res) => {
    return res.render('view')
})

app.post('/insertRecord', (req, res) => {
    const { name, email, password, gender, hobby, city, phone } = req.body;
    UserModel.create({
        name: name,
        email: email,
        password: password,
        gender: gender,
        hobby: hobby,
        city: city,
        phone: phone
    }).then((data, err) => {
        if (err) {
            console.log(err);
            return false
        }
        console.log(`Record Add`);
        return res.redirect('/add');
    })
})

app.get('/editRecord', (req, res) => {
    let id = req.query.Id;
    console.log(id);

    User.findById(id)
        .then((single) => {
            console.log(single);
            return res.render('edit', {
                data: single
            })
        }).catch((err) => {
            console.log(err);
            return false;
        })
})

app.get('/deleteRecord', (req, res) => {
    let id = req.query.deleteId;
    User.findByIdAndDelete(id)
        .then((data) => {
            console.log("User Delete");
            return res.redirect('/')
        }).catch((err) => {
            console.log(err);
            return false;
        })
})

app.post('/updateRecord', (req, res) => {
    const {editid, name, email, password, gender, hobby, city, phone } = req.body;
    console.log(name, email, password, gender, hobby, city, phone);
    
    User.findByIdAndUpdate(editid,{
        name: name,
        email: email,
        password: password,
        gender: gender,
        hobby: hobby,
        city: city,
        phone: phone
    }).then((data) => {
        console.log("User Update");
        return res.redirect('/');
    }).catch((err)=> {
        console.log(err);
        return false;
    })
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false
    }
    console.log(`Server Is Start On Port :- ${port}`);
})