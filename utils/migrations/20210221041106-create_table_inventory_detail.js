'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
return queryInterface.createTable('inventory_detail',{
  id : {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
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
            Stock_real:{
              type:Sequelize.DataTypes.INTEGER,
              allowNull: true
            },
            Stock_system:{
              type:Sequelize.DataTypes.INTEGER,
              allowNull: false
            },
            Difference:{
              type:Sequelize.DataTypes.INTEGER,
              allowNull:true
            },
            Expenses:{
              type:Sequelize.DataTypes.DOUBLE,
              allowNull:true
            }
      })
  },


  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('inventory_detail')
  }
};
