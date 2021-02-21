const {DataTypes} = require('sequelize');
module.exports = (sequelize) => {
  const ProducImage = sequelize.define(
    'prod_image',
    {
      id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },     
      id_product : {
        type : DataTypes.INTEGER,
        allowNull:  false,
        references : {
          model : 'product',
          key : 'id'
        }
      },
      name : {
        type : DataTypes.STRING,
        allowNull:  false,
      }
    },
    {
        freezeTableName: true,
        updatedAt: false,
        createdAt: false,
    }
  )
    
  return ProducImage
}

