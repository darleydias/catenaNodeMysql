'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tiposProcedimento extends Model {
    static associate(models) {
      tiposProcedimento.hasMany(models.procedimento,{foreignKey:'tiposProcedimento_id'})
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