'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('tiposEvidencia', [
  {
    descri: 'Computador de mesa',
    ativo: false,
    createdAt:new Date(),
    updatedAt:new Date()
  },
  {
    descri: 'Notebook',
    ativo: false,
    createdAt:new Date(),
    updatedAt:new Date()
  },
  {
    descri: 'HD Hard Disk',
    ativo: false,
    createdAt:new Date(),
    updatedAt:new Date()
  },
  {
    descri: 'PenDrive',
    ativo: false,
    createdAt:new Date(),
    updatedAt:new Date()
  }
  ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('tiposEvidencia', null, {});
  }
};
