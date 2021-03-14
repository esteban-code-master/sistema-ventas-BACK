const {DataTypes, Sequelize } = require('sequelize')
const User = require('../employees/model')

module.exports = (sequelize) => {
    const Sale = sequelize.define(
        'sale',
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            date:{
                type:DataTypes.DATE,
                allowNull: false,
                default: DataTypes.NOW
            },
            id_user:{
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'user',
                    key: 'id'
                }
            },
            post:{
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            freezeTableName: true,
            updatedAt: false,
            createdAt: false
        }
        
    )

    User(sequelize).hasMany(Sale,{
        foreignKey : 'id_user'
    });

    Sale.belongsTo(User(sequelize),{
        foreignKey : 'id_user'
    });
    
    return Sale
}