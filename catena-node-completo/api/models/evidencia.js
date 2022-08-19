'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class evidencia extends Model {
    static associate(models) {
      evidencia.hasMany(models.movimentacao,{foreignKey:'evidencia_id'})
      evidencia.hasMany(models.mideaEvidencia,{foreignKey:'evidencia_id'})
      evidencia.belongsTo(models.tiposEvidencia,{foreignKey:'tiposEvidencia_id'})
      evidencia.belongsTo(models.setor,{foreignKey:'setorAtual_id'})
      evidencia.belongsTo(models.funcionario,{foreignKey:'respApreensao_id'})
      evidencia.belongsTo(models.operacao,{foreignKey:'operacao_id'})
    }
  }
  evidencia.init({
    dataColeta: DataTypes.DATE,
    nrPonto: DataTypes.STRING,
    descri: DataTypes.STRING,
    quantidade: DataTypes.STRING,
    qrCode: DataTypes.STRING,
    circunstancia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'evidencia',
  });
  return evidencia;
};