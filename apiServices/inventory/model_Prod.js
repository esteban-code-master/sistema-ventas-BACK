const {DataTypes} = require('sequelize')

module.exports = (conexionBd)=>{
    const inventory_Prod = conexionBd.define(
        'prod_inventory',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            date : {
                type : DataTypes.DATE,
                defaultValue: DataTypes.NOW,
                allowNull: false
            },
            id_user:{
                type: DataTypes.INTEGER,
                allowNull: false,
                references:{
                    model:'user',
                    key: ' key'
                }
            }
        },
        {
            freezeTableName: true,
            updatedAt:false,
            createdAt:false
        }
    )
    return inventory_Prod
}