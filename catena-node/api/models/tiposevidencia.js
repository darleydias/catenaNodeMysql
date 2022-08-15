'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tiposEvidencia extends Model {
    static associate(models) {
      // define association here
    }
  }
  tiposEvidencia.init({
    descri: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'tiposEvidencia',
  });
  return tiposEvidencia;
};