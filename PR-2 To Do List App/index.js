const express = require('express');

const port = 8090;

const app = express();

app.use(express.urlencoded());

let Users = [];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    return res.render('index', {
        all: Users
    })
})

app.post('/insertRecord', (req, res) => {
    const { editid, task, status, deadline } = req.body;
    if (editid) {
        const { editid, task, status, deadline } = req.body;

        let Up = Users.map((val) => {
            if (val.id == editid) {
                val.task = task;
                val.status = status;
                val.deadline = deadline;
            }
            return val;
        })
        Users = Up;
        console.log("Record Update");
        return res.redirect('/')

    } else {
        let obj = {
            id: Math.floor(Math.random() * 100000),
            task: task,
            status: status,
            deadline: deadline,
        }
        Users.push(obj);
        console.log("User Successfully Add");
        return res.redirect('/');
    }
});

app.get('/deleteUser', (req, res) => {
    let id = req.query.id;
    let d = Users.filter(val => val.id != id);
    Users = d;
    console.log("User Successfully Add");
    return res.redirect('/');
})

app.get('/editUser', (req, res) => {
    let single = Users.find(val => val.id == req.query.id);
    return res.render('edit', {
        single
    })
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Server Start On Port :-${port}`);
})