const express = require('express');
const fs = require('fs');
const app =express();
const path = require('path');


const publicDirectory=path.join(__dirname); //express/public

app.use(express.static(publicDirectory)); //to define directory to enable searching for static files(css/images etc) by the app

app.get('/',function(req,res){

    res.send("<b>Home page</b>")
})
app.get('/about',function(req,res){

    res.send("this is about us.")
})
app.get('/contact',function(req,res){

    res.send("<h1>this is contact us.</h1>")
})
app.get('/user/:user_id',function(req,res){//request created from the browser with dynamic values(user_id)

    const id=req.params.user_id;
    res.send(id)
})
app.get('/student/batch19f/:user_name',function(req,res){//request created from the browser with dynamic values(user_id)

    const user_name=req.params.user_name;
    res.send(user_name)
})

app.get('/user/:user_id/home',function(req,res){//request created from the browser with dynamic values(user_id)

    const id=req.params.user_id;
    res.send("welcome "+id+" to home page")
})

app.get('/gallery',function(req,res){//request created from the browser with dynamic values(user_id)

   res.sendFile(__dirname+'/gallery.html')
})

app.get('/help',function(req,res){//request created from the browser with dynamic values(user_id)

    res.sendFile(__dirname+"/help.html")
})
app.listen(90);
