'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tiposMidea extends Model {
    static associate(models) {
      // define association here
    }
  }
  tiposMidea.init({
    descri: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'tiposMidea',
  });
  return tiposMidea;
};