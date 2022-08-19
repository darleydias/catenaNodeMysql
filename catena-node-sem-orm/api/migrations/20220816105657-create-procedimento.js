'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('procedimentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descri: {
        type: Sequelize.STRING
      },
      nrProc: {
        type: Sequelize.STRING
      },
      comarca_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        References:{model:'comarca',key:'id'}
      },
      promotor_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        References:{model:'promotor',key:'id'}
      },
      tiposProcedimento_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        References:{model:'tiposProcedimento',key:'id'}
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
    await queryInterface.dropTable('procedimentos');
  }
};