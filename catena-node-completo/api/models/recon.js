'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      recon.hasMany(models.equipeRecon,{foreignKey:'recon_id'})
      recon.hasMany(models.mideaRecon,{foreignKey:'recon_id'})
      recon.belongsTo(models.ponto,{foreignKey:'ponto_id'})
    }
  }
  recon.init({
    dataPrev: DataTypes.DATE,
    dataReal: DataTypes.DATE,
    orientacao: DataTypes.STRING,
    inforColetadas: DataTypes.STRING,
    tipoArea: DataTypes.STRING,
    tipoArea: DataTypes.STRING,
    atvDesenvolidasObservadas: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'recon',
  });
  return recon;
};