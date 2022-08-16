const express = require('express');
const https = require("https")
const app = express();

app.get('/', function(req,res) {
    
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=75cf6c643ae100869029bddf86bd74f4&units=metric"
    https.get(url, function(response) {

        response.on("data",function(data) {
            const weatherData = JSON.parse(data)
            const object = {
                name: "dd",
                hobby: "aa"
            }

            console.log(JSON.stringify(object))

            console.log(weatherData)
        })

        console.log(response.statusCode);
    })
})  



app.listen('3002')
console.log(`Started server on port 3002`);