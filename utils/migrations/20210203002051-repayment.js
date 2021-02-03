'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('repayment',{
      id : {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_sale : {
        type : Sequelize.DataTypes.INTEGER,
        allowNull:  false,
        references : {
          model : 'sale',
          key : 'id'
        }
      },
      id_product : {
        type : Sequelize.DataTypes.INTEGER,
        allowNull:  false,
        references : {
          model : 'product',
          key : 'id'
        }
      },
      date : {
        type : Sequelize.DataTypes.DATE,          
        defaultValue: Sequelize.DataTypes.NOW,
        allowNull:  true,
      },
      amount : {
          type : Sequelize.DataTypes.DOUBLE,
          allowNull:  true
      },

    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('repayment')
  }
};
