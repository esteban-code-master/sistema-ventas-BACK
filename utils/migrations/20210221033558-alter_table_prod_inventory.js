'use strict';

module.exports = 
{
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('prod_inventory','Stock_real')
    await queryInterface.removeColumn('prod_inventory','Stock_system')
    await queryInterface.removeColumn('prod_inventory','Difference')
    await queryInterface.removeColumn('prod_inventory','Expenses')
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('prod_inventory','Stock_real', Sequelize.INTEGER)
    await queryInterface.addColumn('prod_inventory','Stock_system', Sequelize.INTEGER)
    await queryInterface.addColumn('prod_inventory','Difference', Sequelize.INTERGER)
    await queryInterface.addColumn('prod_inventory','Expenses', Sequelize.INTERGER)
  }
};
