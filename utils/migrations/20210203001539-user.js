'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('user',{
    id : {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name : {
      type : Sequelize.DataTypes.STRING(20),                
      allowNull:  false,
    },
    ape_father :{
      type : Sequelize.DataTypes.STRING(20),                
      allowNull: false,
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
      allowNull:  false,
    },
    password : {
      type : Sequelize.DataTypes.STRING,                
      allowNull:  false,
    },
    id_role : {
      type : Sequelize.DataTypes.INTEGER,
      allowNull:  false,
      references : {
        model : 'rol',
        key : 'id'
      }
    },
   })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user')
  }
};
