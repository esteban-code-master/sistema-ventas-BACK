const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    const Roles = sequelize.define(
        'rol',
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            name:{
                type: DataTypes.STRING,
                allowNull: true
            }
        },
        {          
            freezeTableName: true,
            updatedAt: false,
            createdAt: false
        }
    )
    return Roles
}