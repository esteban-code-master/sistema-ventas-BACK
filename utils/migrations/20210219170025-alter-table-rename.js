'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('roles', 'rol')
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('rol', 'roles')
  }
};
