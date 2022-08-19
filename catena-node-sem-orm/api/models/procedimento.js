'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class procedimento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      procedimento.hasMany(models.operacao,{foreignKey:'proc_id'})
      procedimento.belongsTo(models.tiposProcedimento,{foreignKey:'tiposProcedimento_id'})
      procedimento.belongsTo(models.promotor,{foreignKey:'promotor_id'})
      procedimento.belongsTo(models.comarca,{foreignKey:'comarca_id'})
    }
  }
  procedimento.init({
    descri: DataTypes.STRING,
    nrProc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'procedimento',
  });
  return procedimento;
};