'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tiposEvidencia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tiposEvidencia.init({
    descri: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    dh: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'tiposEvidencia',
  });
  return tiposEvidencia;
};