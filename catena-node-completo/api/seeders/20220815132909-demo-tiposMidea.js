'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('tiposMideas', [
        {
          descri: 'Imagem',
          ativo: false,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          descri: 'Video',
          ativo: false,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          descri: 'Som',
          ativo: false,
          createdAt:new Date(),
          updatedAt:new Date()
        },
      ], {});
    },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tiposMideas', null, {});
  }
};
