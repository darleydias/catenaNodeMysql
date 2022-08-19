'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('recons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dataPrev: {
        type: Sequelize.DATEONLY
      },
      dataReal: {
        type: Sequelize.DATEONLY
      },
      orientacao: {
        type: Sequelize.STRING
      },
      inforColetadas: {
        type: Sequelize.STRING
      },
      tipoArea: { //Urbana ou rural
        type: Sequelize.STRING
      },
      atvDesenvolidasObservadas: {
        type: Sequelize.STRING
      },
      ponto_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        References:{model:'ponto',key:'id'}
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
    await queryInterface.dropTable('recons');
  }
};