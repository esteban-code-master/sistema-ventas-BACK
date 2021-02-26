'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {  
    await queryInterface.createTable('promotion',{
        id : {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        quantity : {
          type : Sequelize.DataTypes.INTEGER,
          allowNull:  false,
        },
        reduction : {
          type : Sequelize.DataTypes.INTEGER,
          allowNull:  false,
        },
        type : {
          type : Sequelize.DataTypes.CHAR(1),
          allowNull:  false,
        }
    })   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('promotion')
  }
};
