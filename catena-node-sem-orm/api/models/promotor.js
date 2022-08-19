'use strict';
const {
  Model
} = require('sequelize');
const { FOREIGNKEYS } = require('../sequelize/types/query-types');
const comarca = require('./comarca');
module.exports = (sequelize, DataTypes) => {
  class promotor extends Model {
    static associate(models) {
      promotor.hasMany(models.procedimentos,{foreignKey:'promotor_id'})
      promotor.belongsTo(models.comarca,{foreignKey:'comarca_id'})
    }
  }
  promotor.init({
    nome: DataTypes.STRING,
    mamp: DataTypes.STRING,
    sexo: DataTypes.STRING,
    dtNasc: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'promotor',
  });
  return promotor;
};