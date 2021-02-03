'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable('roles',{
     id : {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
     },
     name :{ 
      type : Sequelize.DataTypes.STRING(20),                
      allowNull:  true,
     }
   })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('roles')  
  }
};
