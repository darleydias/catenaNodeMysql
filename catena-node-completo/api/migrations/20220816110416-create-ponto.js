'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pontos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nrPonto: {
        type: Sequelize.STRING
      },
      endereco: {
        type: Sequelize.STRING
      },
      latLong: {
        type: Sequelize.STRING
      },
      descri: {
        type: Sequelize.STRING
      },
      complemento: {
        type: Sequelize.STRING
      },
      alvo_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        References:{model:'alvo',key:'id'}
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
    await queryInterface.dropTable('pontos');
  }
};