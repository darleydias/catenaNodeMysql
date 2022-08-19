'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class setor extends Model {
    static associate(models) {
      setor.hasMany(models.evidencia,{foreignKey:'setorAtual_id'})
      setor.belongsTo(models.orgao,{foreignKey:'orgao_id'})
    }
  }
  setor.init({
    descri: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'setor',
  });
  return setor;
};