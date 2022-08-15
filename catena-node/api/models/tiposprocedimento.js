'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tiposProcedimento extends Model {
    static associate(models) {
      // define association here
    }
  }
  tiposProcedimento.init({
    descri: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'tiposProcedimento',
  });
  return tiposProcedimento;
};