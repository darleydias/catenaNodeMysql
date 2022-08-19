'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mideaAlvo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      mideaAlvo.belongsTo(models.alvo,{foreignKey:'alvo_id'})
    }
  }
  mideaAlvo.init({
    url: DataTypes.STRING,
    dh: DataTypes.DATE,
    latLong: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'mideaAlvo',
  });
  return mideaAlvo;
};