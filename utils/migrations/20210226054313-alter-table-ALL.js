'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('product', {
      fields: ['code'],
      type: 'unique',      
    });

    await queryInterface.addConstraint('prod_image', {
      fields: ['name'],
      type: 'unique',      
    });

    await queryInterface.addConstraint('user', {
      fields: ['user'],
      type: 'unique',      
    });
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.sequelize.query(`ALTER TABLE product DROP CONSTRAINT code`)
    // await queryInterface.removeIndex('product', 'code');
    // await queryInterface.removeConstraint('prod_image','unique',{
    //   fields : ['name']
    // })
  }
};
