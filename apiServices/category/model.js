const {  DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const category = sequelize.define(
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
  return category
}


 // cate.associate = (models) =>{
  //   cate.hasOne(models.product,{     
  //     foreignKey: 'id_category',             
  //     as: "product"
  //   });
  // }