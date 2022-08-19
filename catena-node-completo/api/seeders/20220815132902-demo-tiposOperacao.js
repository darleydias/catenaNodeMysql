'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('tiposOperacaos', [
      
      {
        descri: 'Próprio',
        ativo: false,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        descri: 'Em Apoio',
        ativo: false,
        createdAt:new Date(),
        updatedAt:new Date()
      },

     ], {});
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('tiposOperacaos', null, {});
     
  }
};
