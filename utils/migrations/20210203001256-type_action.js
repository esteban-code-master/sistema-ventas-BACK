'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('type_action',{ // para tipos de pagos y movimientos
      id : {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type : Sequelize.DataTypes.STRING(20),
        allowNull:  true
      }     
    })     
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('type_action')
  }
};
