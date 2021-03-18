'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {  
    await queryInterface.createTable('sale',{
      id : {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      date : {
        type : Sequelize.DataTypes.DATE,          
        defaultValue: Sequelize.DataTypes.NOW,
        allowNull:  false,
      },
      id_user : {
        type : Sequelize.DataTypes.INTEGER,
        allowNull:  false,
        references : {
          model : 'user',
          key : 'id'
        }
      },
      post : {
        type : Sequelize.DataTypes.INTEGER,
        allowNull:  false,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sale')
  }
};
