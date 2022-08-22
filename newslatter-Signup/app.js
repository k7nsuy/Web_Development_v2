//jshint esversion: 6

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()
app.listen(3003, function() {
    console.log(`Server is running on port 3003`);
})