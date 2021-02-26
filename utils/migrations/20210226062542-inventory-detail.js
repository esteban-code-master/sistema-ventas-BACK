'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('inventory_detail',{
        id_prod_inventory:{
          type:Sequelize.DataTypes.INTEGER,
          references:{
            model:'prod_inventory',
            key:'id'
          }
        },
          id_product:{
            type:Sequelize.DataTypes.INTEGER,
            references:{
              model:'product',
              key:'id'
            }
          },
            stock_real:{
              type:Sequelize.DataTypes.INTEGER,
              allowNull: true
            },
            stock_system:{
              type:Sequelize.DataTypes.INTEGER,
              allowNull: false
            },
            difference:{
              type:Sequelize.DataTypes.INTEGER,
              allowNull:true
            },
            expenses:{
              type:Sequelize.DataTypes.DOUBLE,
              allowNull:true
            }
      }
    )
  },


  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('inventory_detail')
  }
};
