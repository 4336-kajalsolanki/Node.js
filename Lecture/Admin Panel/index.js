const express = require('express');

const port = 8020;

const app = express();

app.set('view engine','ejs');

const path = require('path');

app.use('/',express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    return res.render('dashboard');
})

app.get('/charts',(req,res)=>{
    return res.render('charts');
})

app.get('/widgets',(req,res)=>{
    return res.render('widgets');
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`Server Is Start On Port`);
    
})