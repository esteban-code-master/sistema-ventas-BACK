const { Sequelize, DataTypes } = require('sequelize');

const ProducImage = (sequelize) => {
  return sequelize.define(
    'prod_image',
    {
      id : {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },     
      id_product : {
        type : Sequelize.DataTypes.INTEGER,
        allowNull:  false,
        references : {
          model : 'prod_category',
          key : 'id'
        }
      },
      name : {
        type : Sequelize.DataTypes.STRING,
        allowNull:  false,
      }
    },
    {
        freezeTableName: true,
        updatedAt: false,
        createdAt: false,
    }
  )
}

module.exports = ProducImage