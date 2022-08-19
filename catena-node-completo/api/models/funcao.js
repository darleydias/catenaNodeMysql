'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class funcao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      funcao.hasMany(models.funcionario,{foreignKey:'funcao_id'})
      funcao.belongsTo(models.orgao,{foreignKey:'orgao_id'})
    }
  }
  funcao.init({
    descri: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'funcao',
  });
  return funcao;
};