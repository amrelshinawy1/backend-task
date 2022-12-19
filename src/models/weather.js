'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Weather extends Model {
  }
  Weather.init({
    id: {primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true},
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    temp: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Weather',
  });
  return Weather;
};
