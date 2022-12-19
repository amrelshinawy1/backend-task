'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Station extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            models.Station.hasMany(models.StationBike)
            models.Station.hasMany(models.StationStatus)
        }
    }

    Station.init({
        id: {primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true},
        stationId: DataTypes.INTEGER,
        totalDocks: DataTypes.INTEGER,
        docksAvailable: DataTypes.INTEGER,
        bikesAvailable: DataTypes.INTEGER,
        classicBikesAvailable: DataTypes.INTEGER,
        smartBikesAvailable: DataTypes.INTEGER,
        electricBikesAvailable: DataTypes.INTEGER,
        rewardBikesAvailable: DataTypes.INTEGER,
        rewardDocksAvailable: DataTypes.INTEGER,
        kioskStatus: DataTypes.STRING,
        kioskPublicStatus: DataTypes.STRING,
        kioskConnectionStatus: DataTypes.STRING,
        kioskType: DataTypes.STRING,
        addressStreet: DataTypes.STRING,
        addressCity: DataTypes.STRING,
        addressState: DataTypes.STRING,
        addressZipCode: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'StationStatus',
    });
    return Station;
};
