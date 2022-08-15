 const express = require('express')

 const app = express()

 app.get('/', function(req,res) {
    res.send("<h1>hello</h1>")
 })

 app.get('/connect', function(req,res) {
    res.send('Contact me at : k7@naver.com')
 })

 app.get('/about', function(req,res) {
    res.send('This is about page')
 })

 app.listen(3000, function() { 
    console.log(`Server started on port 3000`);
 })