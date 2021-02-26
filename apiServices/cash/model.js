
module.exports = (sequelize) => {
    return sequelize.define(
        'cash',
        {
            id : {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            quantity : {
                type : Sequelize.DataTypes.DOUBLE,
                allowNull:  false,
            },
            type: {
                type : Sequelize.DataTypes.CHAR(1),
                allowNull:  false,
            },
            id_user :{
                type : Sequelize.DataTypes.INTEGER,
                allowNull:  false,
                reference : {
                    model : 'user',
                    key : 'id'
                }
            },
            id_cashRegister : {
                type : Sequelize.DataTypes.INTEGER,
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