'use strict';

module.exports = 
{
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('prod_inventory','stock_real')
    await queryInterface.removeColumn('prod_inventory','stock_system')
    await queryInterface.removeColumn('prod_inventory','difference')
    await queryInterface.removeColumn('prod_inventory','expenses')
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.addColumn('prod_inventory','stock_real', Sequelize.INTEGER)
    // await queryInterface.addColumn('prod_inventory','stock_system', Sequelize.INTEGER)
    // await queryInterface.addColumn('prod_inventory','difference', Sequelize.INTERGER)
    // await queryInterface.addColumn('prod_inventory','expenses', Sequelize.INTERGER)
  }
};
