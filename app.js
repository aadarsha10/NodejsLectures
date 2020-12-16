//json data parse
//file system (fs) - write, read, append
//core module- which do not require download or installation

const fs = require('fs');
// fs.writeFileSync("hello.txt", "this is some text for hello.txt");


//http is also a core module in nodejs
const http = require('http'); //creates a server then and there to view the data in a browser


//main code
const user_data = fs.readFileSync("user_data.json");
const string_data = user_data.toString();

//now parse it to use individually
const final_data = JSON.parse(string_data);
const us = final_data.username;
const pw= final_data.password;
const adr = final_data.address;
const phn = final_data.phone;
const something= final_data.something;

// if (us== "aadarsha" && pw=="1234"){
//     console.log("Successful login")
// }else{
//     console.log("Invalid Loginattempt")
// }


http.createServer(function(req,res){
    // res.write('<table border="1">')
    // res.write( '<tr><td> Username </td><td>'+us+'</td></tr>');
    // res.write( '<tr><td> Password </td><td>'+pw+'</td></tr>');
    // res.write( '<tr><td> Phone </td><td>'+phn+'</td></tr>');
    // res.write('</table>')

    if (req.url=='/'){
        res.write("<h1>This is homepage</h1>");
        res.write("<p><a href='/'>Home</a></p>");
        res.write("<p><a href='/about'>about</a></p>");
        res.write("<p><a href='/contact'>contact</a></p>");
    }else if (req.url=='/about'){
        res.write("<h1>This is about page</h1>");
        res.write("<p><a href='/'>Home</a></p>");
        res.write("<p><a href='/about'>about</a></p>");
        res.write("<p><a href='/contact'>contact</a></p>");
    }else if (req.url=='/contact'){
        res.write("<h1>This is contact page</h1>");
        res.write("<p><a href='/'>Home</a></p>");
        res.write("<p><a href='/about'>about</a></p>");
        res.write("<p><a href='/contact'>contact</a></p>");
    }
    res.end();
}).listen(90)

