'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('type_action', [
      { id: 1 ,name : "entry_product"},
      { id: 2 ,name : "output_product"}
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('type_action', null, {});
  }
};
