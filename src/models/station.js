const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
  }
  Station.init({
    id: {type:DataTypes.INTEGER,primaryKey:true},
    name: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Station',
  });
  return Station;
};
