'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('prod_category',{
      id : {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
      },
      name: {
        type :Sequelize.DataTypes.STRING(20),
        allowNull:  false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('prod_category')
  }
};
