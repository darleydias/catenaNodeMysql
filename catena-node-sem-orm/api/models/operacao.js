'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class operacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      operacao.hasMany(models.ponto,{foreignKey:'operacao_id'})
      operacao.hasMany(models.equipeOperacao,{foreignKey:'operacao_id'})
      operacao.hasMany(models.evidencia,{foreignKey:'operacao_id'})
      operacao.belongsTo(models.procedimento,{foreignKey:'procedimento_id'})
      operacao.belongsTo(models.tipoOperacao,{foreignKey:'tiposOperacao_id'})
    }
  }
  operacao.init({
    nome: DataTypes.STRING,
    ratBos: DataTypes.STRING,
    fase: DataTypes.STRING,
    contato: DataTypes.STRING,
    sintese: DataTypes.STRING,
    objetivoGeral: DataTypes.STRING,
    objetivoEspecifico: DataTypes.STRING,
    evidenciasDigitais: DataTypes.STRING,
    valoresBens: DataTypes.STRING,
    naoBuscar: DataTypes.STRING,
    dtNasc: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'operacao',
  });
  return operacao;
};