'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mideaAlvos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      url: {
        type: Sequelize.STRING
      },
      dh: {
        type: Sequelize.DATE
      },
      latLong: {
        type: Sequelize.STRING
      },
      alvo_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        References:{model:'alvo',key:'id'}
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
    await queryInterface.dropTable('mideaAlvos');
  }
};