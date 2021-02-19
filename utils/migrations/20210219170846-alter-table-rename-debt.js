'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.renameTable('debts', 'debt')
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.renameTable('debt', 'debts')
  }
};
