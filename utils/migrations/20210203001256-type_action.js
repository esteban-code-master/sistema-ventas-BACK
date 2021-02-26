'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('type_action',{ // para tipos de pagos y movimientos
      id : {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type : Sequelize.DataTypes.STRING(20),
        allowNull:  false
      }     
    })     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('type_action')
  }
};
