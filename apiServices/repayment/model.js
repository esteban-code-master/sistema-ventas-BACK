const {DataTypes} = require('sequelize')
const Sequelize = require('sequelize')
const Sale = require('../sales/model-sale')
const Products = require('../products/model')

module.exports = (sequelize) => {
    const repayment = sequelize.define(
        'repayment',
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            id_sale:{
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'sale',
                    key: 'id'
                }
            },
            id_product:{
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'product',
                    key: 'id'
                }
            },
            date:{
                type: DataTypes.DATE,
                allowNull: false,
                default: DataTypes.NOW
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

    Sale(sequelize).hasMany(repayment,{
        foreignKey : 'id_sale'
    });

    repayment.belongsTo(Sale(sequelize),{
        foreignKey : 'id_sale'
    });

    Products(sequelize).hasMany(repayment,{
        foreignKey : 'id_product'
    });

    repayment.belongsTo(Products(sequelize),{
        foreignKey : 'id_product'
    });
    
    repayment.beforeCreate(async(req) => {
        
        req.dataValues.date = await sequelize.query('SELECT NOW()')
        console.log(req.dataValues.date)
        
        
    })
    return repayment
}