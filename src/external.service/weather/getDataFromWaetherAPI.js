const request = require('request');
require('dotenv').config();

const getWeatherData = () => {
    return new Promise((resolve, reject) => {

        const requestOptions = {
            url: process.env.WEATHER_API_URL + '?q=Philadelphia&appid=' + process.env.WEATHER_API_KEY,
            method: 'GET',
            json: {},
        };

        request(requestOptions, (err, response, body) => {
            if (err) {
                console.log(err)
                reject(err);
            } else if (response.statusCode === 200) {
                resolve(body);
            } else {
                console.log(err)
                reject(response.statusCode);
            }
        });
    });
}

module.exports = {getWeatherData};
