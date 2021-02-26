'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sale_detail',{
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
      id_product :{
          type : Sequelize.DataTypes.INTEGER,
          allowNull:  false,
          references : {
            model : 'product',
            key : 'id'
          }
      },
      quanty : {
        type : Sequelize.DataTypes.INTEGER,
        allowNull:  false
      },
      price : {
        type : Sequelize.DataTypes.DOUBLE,
        allowNull:  false
      },
      amount : {
        type : Sequelize.DataTypes.DOUBLE,
        allowNull:  false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sale_detail')
  }
};
