'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class alvo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      alvo.hasMany(models.mideaAlvo,{foreignKey:'alvo_id'})
    }
  }
  alvo.init({
    nome: DataTypes.STRING,
    alcunha: DataTypes.STRING,
    cpf: DataTypes.STRING,
    rg: DataTypes.STRING,
    ufRg: DataTypes.STRING,
    sexo: DataTypes.STRING,
    dtNasc: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'alvo',
  });
  return alvo;
};