'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class equipeOperacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      equipeOperacao.belongsTo(models.operacao,{foreignKey:'operacao_id'})
      equipeOperacao.belongsTo(models.funcionario,{foreignKey:'funcionario_id'})
    }
  }
  equipeOperacao.init({
    funcao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'equipeOperacao',
  });
  return equipeOperacao;
};