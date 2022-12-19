const { CronJob } = require('cron');
const { updateIndegoData } = require("../external.service/indego/createStationBikeData");
const { storeWeatherData } = require("../external.service/weather/storeWeatherData");
 const initializeCron = () => {
    try {
        const updateIndegoDataCron = new CronJob('*/30 * * * *', updateIndegoData);
        updateIndegoDataCron.start();
        const storeWeatherDataCron = new CronJob('*/30 * * * *', storeWeatherData);
        storeWeatherDataCron.start();
        } catch (error) {
        console.log(error)
        throw error;
      }
    };
    
    module.exports = initializeCron