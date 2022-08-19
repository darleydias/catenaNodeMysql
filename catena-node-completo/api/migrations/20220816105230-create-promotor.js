'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('promotors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      mamp: {
        type: Sequelize.STRING
      },
      sexo: {
        type: Sequelize.STRING
      },
      dtNasc: {
        type: Sequelize.DATEONLY
      },
      comarca_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        References:{model:'comarca',key:'id'}
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
    await queryInterface.dropTable('promotors');
  }
};