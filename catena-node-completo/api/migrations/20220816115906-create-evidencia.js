'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('evidencia', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dataColeta: {
        type: Sequelize.DATE
      },
      nrPonto: {
        type: Sequelize.STRING
      },
      descri: {
        type: Sequelize.STRING
      },
      quantidade: {
        type: Sequelize.STRING
      },
      qrCode: {
        type: Sequelize.STRING
      },
      circunstancia: {
        type: Sequelize.STRING
      },
      operacao_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        References:{model:'operacao',key:'id'}
      },
      tiposEvidencia_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        References:{model:'tiposEvidencia',key:'id'}
      },
      setorAtual_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        References:{model:'setor',key:'id'}
      },
      respApreensao_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        References:{model:'funcionario',key:'id'}
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
    await queryInterface.dropTable('evidencia');
  }
};