const express = require('express');

const port = 9070;

const app = express();

app.set('view engine','ejs');

app.use(express.urlencoded());

const path = require('path');

app.use('/',express.static(path.join(__dirname,'/public')));

app.get('/',(req,res)=>{
    return res.render('index');
})

app.get('/charts',(req,res)=>{
    return res.render('charts');
})

app.get('/widgets',(req,res)=>{
    return res.render('widgets');
})

app.get('/tables',(req,res)=>{
    return res.render('tables');
})

app.get('/full_width',(req,res)=>{
    return res.render('full_width');
})

app.get('/form_basic',(req,res)=>{
    return res.render('form_basic');
})

app.get('/form_wizard',(req,res)=>{
    return res.render('form_wizard');
})

app.get('/pages_buttons',(req,res)=>{
    return res.render('pages_buttons');
})

app.get('/icon_material',(req,res)=>{
    return res.render('icon_material');
})

app.get('/icon_fontawesome',(req,res)=>{
    return res.render('icon_fontawesome');
})

app.get('/pages_elements',(req,res)=>{
    return res.render('pages_elements');
})

app.get('/index_2',(req,res)=>{
    return res.render('index_2');
})

app.get('/pages_gallery',(req,res)=>{
    return res.render('pages_gallery');
})

app.get('/pages_calendar',(req,res)=>{
    return res.render('pages_calendar');
})

app.get('/pages_invoice',(req,res)=>{
    return res.render('pages_invoice');
})

app.get('/pages_chat_option',(req,res)=>{
    return res.render('pages_chat_option');
})

app.get('/authentication_login',(req,res)=>{
    return res.render('authentication_login');
})

app.get('/authentication_register',(req,res)=>{
    return res.render('authentication_register');
})

app.get('/error_403',(req,res)=>{
    return res.render('error_403');
})

app.get('/error_404',(req,res)=>{
    return res.render('error_404');
})

app.get('/error_405',(req,res)=>{
    return res.render('error_405');
})

app.get('/error_500',(req,res)=>{
    return res.render('error_500');
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Server Is Running :-${port}`);
})