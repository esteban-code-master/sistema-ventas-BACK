'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.sequelize.query(`
        // CREATE TRIGGER 'updateExistencesProduct'
        // BEFORE UPDATE ON 'product'
      `)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
