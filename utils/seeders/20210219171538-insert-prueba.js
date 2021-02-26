'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('rol', [
     { id: 1, name : 'gerente'},
     { id: 2,name : 'cajero'}
    ],
    {})
  },

  down: async (queryInterface, Sequelize) => {   
    await queryInterface.bulkDelete('rol', null, {})
  }
};
