const Category = require('../category/model')
const Products = require('../products/model')

exports.union = (sequelize) => {  
        Category(sequelize).hasOne(Products(sequelize),{
            foreignKey: 'id_category'
          })
        
          Products(sequelize).belongsTo(Category(sequelize),{
            foreignKey: 'id_category' 
          });   
}