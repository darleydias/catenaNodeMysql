'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('funcionarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      matricula: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      rg: {
        type: Sequelize.STRING
      },
      ufRg: {
        type: Sequelize.STRING
      },
      celular: {
        type: Sequelize.STRING
      },
      sexo: {
        type: Sequelize.STRING
      },
      dtNasc: {
        type: Sequelize.DATEONLY
      },
      orgao_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        References:{model:'orgao',key:'id'}
      },
      funcao_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        References:{model:'funcao',key:'id'}
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
    await queryInterface.dropTable('funcionarios');
  }
};