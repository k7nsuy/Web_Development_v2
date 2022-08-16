const express = require('express');
const https = require("https")
const app = express();

app.get('/', function(req,res) {
    
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=<API Key>&units=metric"
    https.get(url, function(response) {

        response.on("data",function(data) {
            const weatherData = JSON.parse(data)
            console.log(weatherData)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`
            res.write(`<img scr=${imageURL} </img>`)
            res.write(icon)

            res.write(`<h1>The temperature in London is ${temp} degrees Celcius.</h1>`)
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