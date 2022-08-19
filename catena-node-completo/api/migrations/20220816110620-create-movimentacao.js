'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movimentacaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dataEntrega: {
        type: Sequelize.DATE
      },
      dataRecebimento: {
        type: Sequelize.DATE
      },
      lacre: {
        type: Sequelize.STRING
      },
      observacao: {
        type: Sequelize.STRING
      },
      detentor_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        References:{model:'funcionario',key:'id'}
      },
      destinatario_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        References:{model:'funcionario',key:'id'}
      },
      evidencia_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        References:{model:'evidencia',key:'id'}
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
    await queryInterface.dropTable('movimentacaos');
  }
};