const express = require('express');
const fs = require('fs');
const hbs = require('hbs');
const bodyParser= require('body-parser');//core module
const path = require('path');//handlebars package: thirdparty module
const mysql =require ('mysql')
const app =express();
//hbs inititalize and use in this application as a view engine
app.set('view engine', 'hbs');

//initializing mysql database 
const conn = mysql.createConnection({//using default values
    host:'localhost',
    user:'root',
    password:'',
    database:'batch19f'
})

conn.connect(function(err){
    if(err) throw err;
    console.log('conn established')
})

app.use(bodyParser.urlencoded({extended:false}))

const publicDirectory=path.join(__dirname,'public'); 
app.use(express.static(publicDirectory)); //to define directory to enable searching for static files(css/images etc) by the app


//to let the system know where the partials are located
const partial_dir = path.join(__dirname+'/views/partials');
hbs.registerPartials(partial_dir);


app.get('/',function(req,res){

    // res.sendFile(__dirname+'/home.html')
    res.render('home',{firstname: "Mahesh", lastname:"Adhikari"})
})
app.get('/about',function(req,res){

    // res.sendFile(__dirname+'/about.html')
    res.render('about')
})
app.get('/contact',function(req,res){

    res.render('contact')
})
app.get('/register',function(req,res){
    res.render('register')
})

app.post('/insert',function(req,res){
    // console.log(req.body.username)
    const username = req.body.username
    const email = req.body.email
    const address = req.body.address//saving the data from the form into variables
    //to use while writing insert query

    const sql = "insert into tbl_student values (null, '"+username+"','"+email+"','"+address+"')"
    conn.query(sql);

    res.redirect('/register')
})
app.get('/show',function(req,res){
    const sql2 = "select * from tbl_student"
    conn.query(sql2, function(err, data, fields){

        res.render('show',{data1:data})
    });
 
})


app.listen(90);