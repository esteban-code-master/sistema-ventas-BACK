const {DataTypes, Sequelize } = require('sequelize')
const Sale = require('./model-sale')
const Products = require('../products/model')



module.exports = (sequelize) => {
    const SaleDetails = sequelize.define(
        'sale_detail',
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
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
        },
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

    function getExistence(idobjetivo) {
        return Products(sequelize).findOne({
            where: {
                "id" : idobjetivo
            }
        });
    }

    SaleDetails.afterCreate(async(res) => {
        var idobjetivo = res.dataValues.id_product
        var cantcomprada = res.dataValues.quanty

        const cantalmacen = new Promise((resolve, reject) => {
            getExistence(idobjetivo).then(function(result){
                resolve(result.existence)
            })
           
        })

        cantalmacen.then( function(cantalmacenada){
            console.log("producto comprado: ", cantcomprada)
            console.log("producto en almacen: ", cantalmacenada)
            var cantidadresta = cantalmacenada - cantcomprada
            console.log("resultado: ", cantidadresta)
            if (cantalmacenada - cantcomprada < 0){
                sequelize.query('UPDATE product set existence = 0 where id =' + idobjetivo)    
            }
            else{
                sequelize.query('UPDATE product set existence = ' + cantidadresta + ' where id = ' + idobjetivo)    
            }
        })
    })

    return SaleDetails
}