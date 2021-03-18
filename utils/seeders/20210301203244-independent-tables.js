'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {    
   await queryInterface.bulkInsert('prod_category', [      
     {id : 1,name: 'contruccion'},   
     {id : 2,name: 'medicion'},
     {id : 3,name: 'aires'},
     {id : 4,name: 'hogar'},
     {id : 5,name: 'electricidad'},
     {id : 6,name: 'pinturas'},
     {id : 7,name: 'plomeria'},
    ], {});

    await queryInterface.bulkInsert('rol', [
      { id: 1, name : 'gerente'},
      { id: 2,name : 'cajero'}
     ],
     {})

    await queryInterface.bulkInsert('type_action', [
      { id: 1 ,name : "entry_product"},
      { id: 2 ,name : "output_product"}
    ],{})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('prod_category', null, {})
    await queryInterface.bulkDelete('rol', null, {})
    await queryInterface.bulkDelete('type_action', null, {});
  }
};
