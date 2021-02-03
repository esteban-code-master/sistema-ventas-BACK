'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('debts',{
      id : {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_user :{ 
        type : Sequelize.DataTypes.INTEGER,
        allowNull:  false,
        references : {
          model : 'user',
          key : 'id'
        }
      },
      date:{
        type : Sequelize.DataTypes.DATE,          
        defaultValue: Sequelize.DataTypes.NOW,
        allowNull:  true,
      },
      amount : {
        type : Sequelize.DataTypes.DOUBLE,
        allowNull:  true
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('debts') 
  }
};
