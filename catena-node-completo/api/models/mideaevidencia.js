'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mideaEvidencia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      mideaEvidencia.belongsTo(models.evidencia,{foreignKey:'evidencia_id'})
    }
  }
  mideaEvidencia.init({
    url: DataTypes.STRING,
    dh: DataTypes.DATE,
    latLong: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mideaEvidencia',
  });
  return mideaEvidencia;
};