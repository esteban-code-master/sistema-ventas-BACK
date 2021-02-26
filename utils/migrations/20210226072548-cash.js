'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cash',{
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
  })
  // la columna type solo puede aceptar los valores de  "+"" o "-" que 
  // hacen la referencia de entrada y salida respectivamente
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cash')
  }
};
