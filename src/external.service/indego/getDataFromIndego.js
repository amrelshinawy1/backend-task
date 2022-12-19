const request = require('request');
require('dotenv').config();

const getIndegoData = new Promise((resolve, reject) => {
    const requestOptions = {
        url: process.env.INDEGO_API_URL,
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

module.exports = {getIndegoData};
