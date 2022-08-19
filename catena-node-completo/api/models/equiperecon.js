'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class equipeRecon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      equipeRecon.belongsTo(models.funcionario,{foreignKey:'funcionario_id'})
      equipeRecon.belongsTo(models.recon,{foreignKey:'recon_id'})
    }
  }
  equipeRecon.init({
    obs: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'equipeRecon',
  });
  return equipeRecon;
};