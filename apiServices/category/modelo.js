const {  DataTypes } = require('sequelize');

const Category = (sequelize) => {
  return sequelize.define(
    'prod_category',
    {
      id :{
        type: DataTypes.INTEGER,
        primaryKey: true,       
      },  
      name:{
        type: DataTypes.STRING,
        allowNull: false
      }
    },{
      freezeTableName: true,
      updatedAt: false,
      createdAt: false,
    }
  )
}

module.exports = Category