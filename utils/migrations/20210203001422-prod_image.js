'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('prod_image',{
        id : {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        id_product : {
          type : Sequelize.DataTypes.INTEGER,
          allowNull:  false,
          reference : {
            model : 'product',
            key : 'id'
          }
        },
        name : { 
          type : Sequelize.DataTypes.STRING(20),
          allowNull:  false, 
        }
    })
  },
  
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('prod_image')
  }
};
