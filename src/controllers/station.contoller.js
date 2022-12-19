const db = require('../models')
const moment = require('moment');
const { Op } = require("sequelize");

exports.getAllStations = async (req, res) => {
    try {

        if (!req.query.at) {
            res.status(404).send({error: "at field required"});
        }

        const at = moment(req.query.at, moment.ISO_8601).format('YYYY-MM-DD HH:mm:ss');
        const name = req.params.name;

        let filter = {};
        if (name) {
            filter = {
                name: name
            }
        }

        const stationData = await db.Station.findOne({
            include: [
                {
                    model: db.StationStatus,
                    where: {
                        createdAt: {[Op.gt]: at}
                    }
                }
            ],
            where: filter,
        });

        const weatherData = await db.Weather.findOne({
            where: {createdAt: {[Op.gt]: at}},
        });

        const responseData = [{at: at, station: stationData, weather: weatherData}];
        return res.status(200).send({ message: '', responseData });
    } catch (error) {
        console.log(error)
        throw error;
    }
}
