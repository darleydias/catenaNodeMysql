'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ponto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ponto.hasMany(models.recon,{foreignKey:'ponto_id'})
      ponto.belongsTo(models.operacao,{foreignKey:'operacao_id'})
      ponto.belongsTo(models.alvo,{foreignKey:'alvo_id'})
    }
  }
  ponto.init({
    nrPonto: DataTypes.STRING,
    endereco: DataTypes.STRING,
    latLong: DataTypes.STRING,
    descri: DataTypes.STRING,
    complemento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ponto',
  });
  return ponto;
};