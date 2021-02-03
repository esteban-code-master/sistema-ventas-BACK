'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('session',{
      id:{
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
      date : {
        type : Sequelize.DataTypes.DATE,          
        defaultValue: Sequelize.DataTypes.NOW,
        allowNull:  true,
      },
      status_atm :{
        type : Sequelize.DataTypes.BOOLEAN,          
        defaultValue: false,
        allowNull:  true,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('session')
  }
};
