'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('type_action', [
      { name : "entry"},
      { name : "output"}
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('type_action', null, {});
  }
};
