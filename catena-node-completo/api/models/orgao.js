'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orgao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      orgao.hasMany(models.funcionario,{foreignKey:'orgao_id'})
      orgao.hasMany(models.setor,{foreignKey:'orgao_id'})
      orgao.hasMany(models.funcao,{foreignKey:'orgao_id'})
    }
  }
  orgao.init({
    descri: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'orgao',
  });
  return orgao;
};