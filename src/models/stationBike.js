'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Station extends Model {
    }

    Station.init({
        id: {primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true},
        stationId: DataTypes.INTEGER,
        dockNumber: DataTypes.INTEGER,
        isElectric: DataTypes.BOOLEAN,
        isAvailable: DataTypes.BOOLEAN,
        battery: DataTypes.FLOAT,
    }, {
        sequelize,
        modelName: 'StationBike',
    });
    return Station;
};
