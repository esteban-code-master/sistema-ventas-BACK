const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    return sequelize.define(
        'promotion',{
            id : {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            id_product:{
                type : DataTypes.INTEGER,
                allowNull:  false,
                references : {
                    model : 'product',
                    key: 'id'
                }
            },
            quantity : {
                type : DataTypes.INTEGER,
                allowNull:  false
            },
            reduction : {
                type : DataTypes.INTEGER,
                allowNull:  false
            },
            type : {
                type : DataTypes.CHAR(1),
                allowNull:  false
            }
        },
        {
            freezeTableName: true,
            updatedAt: false,
            createdAt: false,   
        }
    )
}