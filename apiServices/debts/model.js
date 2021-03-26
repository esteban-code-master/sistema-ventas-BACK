const {DataTypes, Sequelize } = require('sequelize')
const Users = require('../employees/model')

module.exports = (sequelize) => {
    const Debts = sequelize.define(
        'debt', 
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            id_user:{
                type: DataTypes.INTEGER,
                allowNull: false,
                references:{
                    model:'user',
                    key: 'id'
                }
            },
            date:{
                type : DataTypes.DATE,
                defaultValue: DataTypes.NOW,
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

    Users(sequelize).hasMany(Debts,{
        foreignKey: 'id_user'
    })

    Debts.belongsTo(Users(sequelize),{
        foreignKey : 'id_user'
    })


    return Debts
}