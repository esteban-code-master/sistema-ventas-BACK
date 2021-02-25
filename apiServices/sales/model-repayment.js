const {DataTypes, Sequelize } = require('sequelize')
const Sale = require('./model-sale')
const Products = require('../products/model')

module.exports = (sequelize) => {
    const Repayment = sequelize.define(
        'repayment',
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true
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
    return Repayment
}