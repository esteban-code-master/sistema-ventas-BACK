'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable('user',{
    id : {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name : {
      type : Sequelize.DataTypes.STRING(20),                
      allowNull:  true,
    },
    ape_father :{
      type : Sequelize.DataTypes.STRING(20),                
      allowNull:  true,
    },
    ape_mother : {
      type : Sequelize.DataTypes.STRING(20),                
      allowNull:  true,
    },
    phone : {
      type : Sequelize.DataTypes.STRING,                
      allowNull:  true,
    },
    email : {
      type : Sequelize.DataTypes.STRING(50),                
      allowNull:  true,
    },
    user : {
      type : Sequelize.DataTypes.STRING(20),                
      allowNull:  true,
    },
    password : {
      type : Sequelize.DataTypes.STRING,                
      allowNull:  true,
    },
    id_role : {
      type : Sequelize.DataTypes.INTEGER,
      allowNull:  false,
      references : {
        model : 'roles',
        key : 'id'
      }
    },
   })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user')
  }
};
