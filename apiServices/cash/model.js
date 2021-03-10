
const {  DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        'cash',
        {
            id : {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            quantity : {
                type : DataTypes.DOUBLE,
                allowNull:  false,
            },
            type: {
                type : DataTypes.CHAR(1),
                allowNull:  false,
            },
            id_user :{
                type : DataTypes.INTEGER,
                allowNull:  false,
                reference : {
                    model : 'user',
                    key : 'id'
                }
            },
            id_cashRegister : {
                type : DataTypes.INTEGER,
                allowNull:  false,
                reference : {
                    model : 'cash_register',
                    key : 'id'
                }
            }                        
        },{
          freezeTableName: true,
          updatedAt: false,
          createdAt: false,
        }
    )       
}