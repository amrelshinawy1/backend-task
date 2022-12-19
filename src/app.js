require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const initializeCron = require('./cron/seed.stations');
const stationController = require('./controllers/station.contoller')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// initialize cron that will fetch data every 30 min 
initializeCron();

// api to get all stations 
app.use('/stations/:name?', stationController.getAllStations)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
});


module.exports = app
