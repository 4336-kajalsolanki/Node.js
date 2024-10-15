const express = require('express');

const port = 8080;

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    return res.render('index', {
        title: "Express.js",
        pagename: "Index Page",
        Users: [
            {
                id: 1,
                name: "kajal",
            },
            {
                id: 2,
                name: "pruthvi",
            },
            {
                id: 3,
                name: "prujal",
            },
        ]
    });
})

app.get('/home', (req, res) => {
    return res.render('home');
})

app.get('/pro', (req, res) => {
    return res.render('product');
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Server Start On Port :-${port}`);

})