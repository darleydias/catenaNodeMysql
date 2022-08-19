'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comarca extends Model {
    static associate(models) {
      // define association here
      comarca.hasMany(models.promotor,{foreignKey:'comarca_id'})
      comarca.hasMany(models.procedimento,{foreignKey:'comarca_id'})
    }
  }
  comarca.init({
    nome: DataTypes.STRING,
    tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'comarca',
  });
  return comarca;
};