'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('funcaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descri: {
        type: Sequelize.STRING
      },
      orgao_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        References:{model:'orgao',key:'id'}
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
    await queryInterface.dropTable('funcaos');
  }
};