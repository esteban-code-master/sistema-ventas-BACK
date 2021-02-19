const {DataTypes, Sequelize} = require('sequelize');

const Roles = (sequelize) => {
    return sequelize.define(
        'roles',
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,

            },
            name:{
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            freezeTableName: true,
            updatedAt: false,
            createdAt: false
        }
    )
}

module.exports = Roles