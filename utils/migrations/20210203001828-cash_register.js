'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cash_register',{
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
      post:{
        type : Sequelize.DataTypes.INTEGER,
        allowNull:  false,
      },
      date : {
        type : Sequelize.DataTypes.DATE,          
        defaultValue: Sequelize.DataTypes.NOW,
        allowNull:  false,
      },
      status_atm :{
        type : Sequelize.DataTypes.BOOLEAN,          
        defaultValue: false,
        allowNull: false,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cash_register')
  }
};
