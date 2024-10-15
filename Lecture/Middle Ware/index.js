const express = require('express');

const port = 7000;

const app = express();

app.set('view engine', 'ejs')

app.use(express.urlencoded());

const {AgeCheck,Role} = require('./middleware/agecheck')

app.get('/', (req, res) => {
    return res.render('index');
})

app.get('/contact', AgeCheck, (req, res) => {
    return res.render('contact');
})

app.get('/product', AgeCheck,Role,(req, res) => {
    return res.render('product');
})

app.use(AgeCheck);
app.use(Role);

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Server Is Running :-${port}`);
})