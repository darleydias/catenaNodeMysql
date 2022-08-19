'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tiposOperacao extends Model {
    static associate(models) {
      tiposOperacao.hasMany(models.operacao,{foreignKey:'tiposOperacao_id'})
    }
  }
  tiposOperacao.init({
    descri: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'tiposOperacao',
  });
  return tiposOperacao;
};