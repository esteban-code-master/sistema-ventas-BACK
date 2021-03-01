

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('product', [
      {
        code : 000000000000,
        name : 'llave perica',
        description : 'herramienta para todo tipo de plomeria',
        price : 10.40,
        existence : 100,
        id_category : 7,        
      },
      {
        code : 000000000001,
        name : 'llave española',
        description : 'herramienta para todo tipo de plomeria muy flexible',
        price : 20.50,
        existence : 100,
        id_category : 7,        
      },
      {
        code : 000000000002,
        name : 'pinzas',
        description : 'Ideal para cortar cables',
        price : 10.40,
        existence : 100,
        id_category : 5,        
      },
      {
        code : 000000000003,
        name : 'pinzas de puntas',
        description : 'perfecta para doblar cables',
        price : 34.40,
        existence : 100,
        id_category : 5,        
      },
      {
        code : 000000000004,
        name : 'desarmador plano',
        description : 'herramienta general',
        price : 22.40,
        existence : 100,
        id_category : 5,        
      },
      {
        code : 000000000005,
        name : 'desarmador de estrella',
        description : 'herramienta general',
        price : 12.40,
        existence : 100,
        id_category : 5,        
      },
      {
        code : 000000000006,
        name : 'cuter',
        description : 'herramienta en general',
        price : 10.40,
        existence : 100,
        id_category : 5,        
      },
      {
        code : 000000000007,
        name : 'cables 2x1000 mts',
        description : 'cable calibre 12',
        price : 3440.40,
        existence : 100,
        id_category : 5,        
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('product', null, {});
  }
};
