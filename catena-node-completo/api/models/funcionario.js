'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class funcionario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      funcionario.hasMany(models.movimentacao,{foreignKey:'detentor_id'})
      funcionario.hasMany(models.movimentacao,{foreignKey:'destinatario_id'})
      funcionario.hasMany(models.equipeOperacao,{foreignKey:'funcionario_id'})
      funcionario.hasMany(models.equipeRecon,{foreignKey:'funcionario_id'})
      funcionario.hasMany(models.evidencia,{foreignKey:'respApreensao_id'})
      funcionario.belongsTo(models.orgao,{foreignKey:'orgao_id'})
      funcionario.belongsTo(models.funcao,{foreignKey:'funcao_id'})
    }
  }
  funcionario.init({
    nome: DataTypes.STRING,
    matricula: DataTypes.STRING,
    cpf: DataTypes.STRING,
    rg: DataTypes.STRING,
    ufRg: DataTypes.STRING,
    celular: DataTypes.STRING,
    sexo: DataTypes.STRING,
    dtNasc: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'funcionario',
  });
  return funcionario;
};