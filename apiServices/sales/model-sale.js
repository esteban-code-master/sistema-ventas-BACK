const {DataTypes, Sequelize } = require('sequelize')
//referencia a session

module.exports = (sequelize) => {
    const Sales = sequelize.define(
        'sale',
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            date:{
                type:DataTypes.DATE,
                allowNull: false
            },
            id_session:{
                type: DataTypes.INTEGER,
                allowNull: false,
                /*references: {
                    model: 'sesion',
                    key: 'id'
                }*/
            }
        },
        {
            freezeTableName: true,
            updatedAt: false,
            createdAt: false
        }
        
    )
    return Sales
}