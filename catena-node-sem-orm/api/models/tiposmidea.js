'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tiposMidea extends Model {
    static associate(models) {
      tiposMidea.hasMany(models.mideaRecon,{foreignKey:'tiposMidea_id'})
      tiposMidea.hasMany(models.mideaAlvo,{foreignKey:'tiposMidea_id'})
      tiposMidea.hasMany(models.mideaEvidencia,{foreignKey:'tiposMidea_id'})
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