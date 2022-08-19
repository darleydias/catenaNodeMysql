'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('equipeRecons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      obs: {
        type: Sequelize.STRING
      },
      funcionario_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        References:{model:'funcionario',key:'id'}
      },
      recon_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        References:{model:'recon',key:'id'}
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
    await queryInterface.dropTable('equipeRecons');
  }
};