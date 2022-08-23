//jshint esversion: 6

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.use(express.static("public"))

app.listen(3003, function() {
    console.log(`Server is running on port 3003`);
})

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/signup.html")
})
