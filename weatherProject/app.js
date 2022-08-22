const express = require('express');
const https = require("https")
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/index.html" )
})  

app.post('/' , function(req,res) {
    console.log("Post request recieved");

    const query = req.body.cityName
    const apiKey = require('./apiKey.js')
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`
    https.get(url, function(response) {

        response.on("data",function(data) {
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`
            res.write(`<p>The weather is currently ${weatherDescription} <p>`)            
            res.write(`<h1>The temperature in ${query} is ${temp} degrees Celcius.</h1>`)
            res.write(`<img src=${imageURL} >`)
            res.send();
            // const object = {
            //     name: "dd",
            //     hobby: "aa"
            // }

            // console.log(JSON.stringify(object))

        })
        console.log(response.statusCode);
    })
})


app.listen('3002')
console.log(`Started server on port 3002`);