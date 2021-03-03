const {DataTypes}=require('sequelize')
module.exports = (conexionBd)=>{
    const InventoryDetail = conexionBd.define(
        'inventory_detail',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            id_prod_inventory:{
                type : DataTypes.INTEGER,
                allowNull: true,
                references : {
                    model: 'prod_inventory',
                    key: 'id'
                }
            },
            id_product:{
                type : DataTypes.INTEGER,
                allowNull: true,
                references:{
                    model: 'product',
                    key: 'key'
                }
            },
            Stock_real:{
                type: DataTypes.INTEGER,
                allowNull: true
            },
            Stock_system:{
                type:DataTypes.INTEGER,
                allowNull:false
            },
            Difference:{
                type: DataTypes.INTEGER,
                allowNull:true
            },
            Expenses:{
                type:DataTypes.DOUBLE,
                allowNull:true
            }
        },
        {
            freezeTableName: true,
            updatedAt: false,
            createdAt: false,
        }
    )
    return InventoryDetail
}