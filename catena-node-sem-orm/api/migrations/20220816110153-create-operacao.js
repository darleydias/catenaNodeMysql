'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('operacaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      ratBos: {
        type: Sequelize.STRING
      },
      fase: {
        type: Sequelize.STRING
      },
      contato: {
        type: Sequelize.STRING
      },
      sintese: {
        type: Sequelize.STRING
      },
      objetivoGeral: {
        type: Sequelize.STRING
      },
      objetivoEspecifico: {
        type: Sequelize.STRING
      },
      evidenciasDigitais: {
        type: Sequelize.STRING
      },
      valoresBens: {
        type: Sequelize.STRING
      },
      naoBuscar: {
        type: Sequelize.STRING
      },
      dtNasc: {
        type: Sequelize.DATEONLY
      },
      tiposOperacao_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        References:{model:'tiposOperacao',key:'id'}
      },
      procedimento_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        References:{model:'procedimento',key:'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('operacaos');
  }
};