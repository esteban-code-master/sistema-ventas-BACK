const { DataTypes, Sequelize } = require('sequelize')
const Roles = require('./model-roles')

module.exports = (sequelize) => {
    const Users = sequelize.define(
        'user',
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            name:{
                type: DataTypes.STRING,
                allowNull: false
            },
            ape_father:{
                type: DataTypes.STRING,
                allowNull: false
            },
            ape_mother:{
                type: DataTypes.STRING,
                allowNull: false
            },
            phone:{
                type: DataTypes.STRING,
                allowNull: false
            },
            email:{
                type: DataTypes.STRING,
                allowNull: false
            },
            user:{
                type: DataTypes.STRING,
                allowNull: false
            },
            password:{
                type: DataTypes.STRING,
                allowNull: false
            },
            id_role:{
                type: DataTypes.INTEGER,
                allowNull: false,
                references :{
                    model: 'roles',
                    key: 'id'
                }
            }
        },
        {
            freezeTableName: true,
            updatedAt: false,
            createdAt: false,
        }
    )
    

    Roles(sequelize).hasMany(Users,{
        foreignKey : 'id'
    });

    Users.belongsTo(Roles(sequelize),{
        foreignKey : 'id_role'
    });

    return Users
}