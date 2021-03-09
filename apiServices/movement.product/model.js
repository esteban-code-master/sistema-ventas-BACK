const { DataTypes} = require('sequelize')

module.exports = (sequelize,type) => {
    return sequelize.define(
        'prod_movement',
        {
            id : {
                type : DataTypes.INTEGER,
                primaryKey : true,
                autoIncrement: true
            },
            date :{
                type : DataTypes.DATE,
                defaultValue: DataTypes.NOW,
                allowNull: false
            },
            quantity : {
                type : DataTypes.INTEGER,
                allowNull: false
            },
            id_product : {
                type : DataTypes.INTEGER,
                allowNull: false,
                references : {
                    model: 'product',
                    key:'id'
                }
            },
            id_user:{
                type : DataTypes.INTEGER,
                allowNull: false,
                references : {
                    model: 'user',
                    key:'id'
                }
            },
            id_type:{
                type : DataTypes.INTEGER,
                allowNull: false,
                defaultValue : type,                
                references : {
                    model: 'type_action',
                    key:'id'
                }
            }
        },
        {
            freezeTableName: true,
            updatedAt: false,
            createdAt: false,
        },
        {
            hooks:
            {
                afterCreate: function(){
                    console.log('Venta creada con el id', res.dataValues.id_sale )
                }
            }
        },
    )
}   