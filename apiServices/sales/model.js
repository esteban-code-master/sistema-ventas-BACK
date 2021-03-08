
const {DataTypes, Sequelize } = require('sequelize')
const Sale = require('./model-sale')
const Products = require('../products/model')


module.exports = (sequelize) => {
    const SaleDetails = sequelize.define(
        'sale_detail',
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            id_sale:{
                type: DataTypes.INTEGER,
                allowNull: false,
                references :{
                    model: 'sale',
                    key: 'id'
                }
            },
            id_product:{
                type:  DataTypes.INTEGER,
                allowNull: false,
                references : {
                    model: 'producto',
                    key: 'id'
                }
            },
            quanty:{
                type: DataTypes.INTEGER,
                allowNull: false

            },
            price:{
                type: DataTypes.DOUBLE,
                allowNull: false
            },
            amount:{
                type: DataTypes.DOUBLE,
                allowNull: false
            }
        },
        {
            freezeTableName: true,
            updatedAt: false,
            createdAt: false
        }
    )
    
    Sale(sequelize).hasMany(SaleDetails,{
        foreignKey : 'id_sale'
    });

    SaleDetails.belongsTo(Sale(sequelize),{
        foreignKey : 'id_sale'
    });

    Products(sequelize).hasMany(SaleDetails,{
        foreignKey : 'id_product'
    });

    SaleDetails.belongsTo(Products(sequelize),{
        foreignKey : 'id_product'
    });

    return SaleDetails
}