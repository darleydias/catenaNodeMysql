'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('equipeOperacaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      funcao: {
        type: Sequelize.STRING
      },
      funcionario_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        References:{model:'funcionario',key:'id'}
      },
      operacao_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        References:{model:'operacao',key:'id'}
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
    await queryInterface.dropTable('equipeOperacaos');
  }
};