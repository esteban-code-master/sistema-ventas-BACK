'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {  
    return queryInterface.createTable('sale',{
      id : {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      date : {
        type : Sequelize.DataTypes.DATE,          
        defaultValue: DataTypes.NOW,
        allowNull:  true,
      },
      id_user : {
        type : Sequelize.DataTypes.INTEGER,
        allowNull:  false,
        references : {
          model : 'session',
          key : 'id'
        }
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sale')
  }
};
