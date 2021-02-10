const { Sequelize, DataTypes } = require('sequelize');

const Products = (sequelize) => {
  return sequelize.define(
    'product',
    {
      id : {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      code: {
        type : Sequelize.DataTypes.STRING(24),
        allowNull:  true
      },
      name : {
        type : Sequelize.DataTypes.STRING(50),
        allowNull:  false
      },
      description : {
        type : Sequelize.DataTypes.TEXT,
        allowNull:  true
      },
      price : {
        type : Sequelize.DataTypes.DOUBLE,
        allowNull:  false
      },
      existence : {
        type : Sequelize.DataTypes.INTEGER,
        allowNull:  false
      },
      id_category : {
        type : Sequelize.DataTypes.INTEGER,
        allowNull:  false,
        references : {
          model : 'prod_category',
          key : 'id'
        }
      },
      status : {
        type : Sequelize.DataTypes.BOOLEAN,
        allowNull:  false,
        defaultValue: true,
      }
    },
    {
        freezeTableName: true,
        updatedAt: false,
        createdAt: false,
    }
  )
}

module.exports = Products