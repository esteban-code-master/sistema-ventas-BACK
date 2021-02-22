'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('type_action', [
      { name : "entry_product"},
      { name : "output_product"}
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('type_action', null, {});
  }
};
