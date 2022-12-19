const db = require('../../models')
const {getWeatherData} = require("./getDataFromWaetherAPI");

const storeWeatherData = () => {
    getWeatherData().then((data) => {
        const weather = data.weather;
        const main = data.main;

        const mainDescription = weather[0].main;
        const subDescription = weather.description;
        const temp = main.temp;

        db.Weather.create({
            mainDescription,
            subDescription,
            temp,
        });

    }).catch((err) => {
        console.log(err)
    });
}


module.exports = {storeWeatherData};
