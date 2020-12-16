const express = require('express');
const fs = require('fs');
const hbs = require('hbs');//handlebars package: thirdparty module
const app =express();
const path = require('path');

const publicDirectory=path.join(__dirname,'public'); 

app.use(express.static(publicDirectory)); //to define directory to enable searching for static files(css/images etc) by the app

//hbs inititalize and use in this application as a view engine
app.set('view engine', 'hbs');

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

    // res.sendFile(__dirname+'/contact.html')
    res.render('contact')
})

app.listen(90);