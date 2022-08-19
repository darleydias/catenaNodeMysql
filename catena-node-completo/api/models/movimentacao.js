'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movimentacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      movimentacao.belongsTo(models.funcionario,{foreignKey:'detentor_id'})
      movimentacao.belongsTo(models.funcionario,{foreignKey:'destinatario_id'})
      movimentacao.belongsTo(models.evidencia,{foreignKey:'evidencia_id'})
    }
  }
  movimentacao.init({
    dataEntrega: DataTypes.DATE,
    dataRecebimento: DataTypes.DATE,
    lacre: DataTypes.STRING,
    observacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'movimentacao',
  });
  return movimentacao;
};