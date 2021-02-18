const { DataTypes } = require('sequelize');
const Category = require('../category/model');
const ProducImage = require('./model-images')

module.exports = (sequelize) => {
  const product = sequelize.define(
    'product',
    {
      id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      code: {
        type : DataTypes.STRING(24),
        allowNull:  true
      },
      name : {
        type : DataTypes.STRING(50),
        allowNull:  false
      },
      description : {
        type : DataTypes.TEXT,
        allowNull:  true
      },
      price : {
        type : DataTypes.DOUBLE,
        allowNull:  false
      },
      existence : {
        type : DataTypes.INTEGER,
        allowNull:  false
      },
      id_category : {
        type : DataTypes.INTEGER,
        allowNull:  false,
        references : {
          model : 'prod_category',
          key : 'id'
        }
      },
      status : {
        type : DataTypes.BOOLEAN,
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
  
  Category(sequelize).hasMany(product,{
    foreignKey : 'id_category'
  });

  product.belongsTo(Category(sequelize),{
    foreignKey: 'id_category' 
  });

  product.hasMany(ProducImage(sequelize),{
    foreignKey: 'id_product' 
  })
  ProducImage(sequelize).belongsTo(product,{
    foreignKey: 'id_product' 
  })
  return product
}
