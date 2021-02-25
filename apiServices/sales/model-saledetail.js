const {DataTypes, Sequelize } = require('sequelize')
const Sale = require('./model-sale')
const Products = require('../products/model')


module.exports = (sequlize) => {
    const SaleDetails = sequelize.define(
        'sale-detail',
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
            id_prod:{
                type:  DataTypes.INTEGER,
                allowNull: false,
                references : {
                    model: 'producto',
                    key: 'id'
                }
            },
            quantity:{
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
    );

    return SaleDetails
}