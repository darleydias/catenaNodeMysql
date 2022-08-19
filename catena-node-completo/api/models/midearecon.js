'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mideaRecon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      mideaRecon.belongsTo(models.recon,{foreignKey:'recon_id'})
    }
  }
  mideaRecon.init({
    url: DataTypes.STRING,
    dh: DataTypes.DATE,
    latLong: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mideaRecon',
  });
  return mideaRecon;
};