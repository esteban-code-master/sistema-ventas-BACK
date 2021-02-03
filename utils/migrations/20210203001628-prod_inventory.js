'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('prod_inventory',{
        id : {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        date : {
          type : Sequelize.DataTypes.DATE,          
          defaultValue: Sequelize.DataTypes.NOW,
          allowNull:  true,
        },
        stock_real : {
          type : Sequelize.DataTypes.INTEGER,
          allowNull:  true
        },
        stock_system : {
          type : Sequelize.DataTypes.INTEGER,
          allowNull:  true
        },
        difference : {
          type : Sequelize.DataTypes.INTEGER,
          allowNull:  true
        },
        expenses: {
          type : Sequelize.DataTypes.INTEGER,
          allowNull:  true
        },
        id_user : {
          type : Sequelize.DataTypes.INTEGER,
          allowNull:  false,
          references : {
            model : 'user',
            key : 'id'
          }
        }     
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('prod_inventory')
  }
};
