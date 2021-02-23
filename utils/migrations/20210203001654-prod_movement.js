'use strict';
const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('prod_movement',{
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      date: {
        type : DataTypes.DATE,          
        defaultValue: Sequelize.NOW,
        allowNull:  false,
      },
      quantity:{
        type : Sequelize.DataTypes.INTEGER,
        allowNull:  false
      },
      id_product :{
        type : Sequelize.DataTypes.INTEGER,
        allowNull:  false,
        references : {
          model : 'product',
          key : 'id'
        }
      },
      id_user : {
        type : Sequelize.DataTypes.INTEGER,
        allowNull:  false,
        references : {
          model : 'user',
          key : 'id'
        }
      },
      id_type : {
        type : Sequelize.DataTypes.INTEGER,
        allowNull:  false,
        references : {
          model : 'type_action',
          key : 'id'
        }
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('prod_movement')
  }
};
