'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('setors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descri: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      orgao_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        References:{model:'orgao',key:'id'}
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('setors');
  }
};