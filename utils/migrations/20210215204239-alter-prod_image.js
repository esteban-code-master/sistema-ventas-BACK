'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('prod_image', {
      fields: ['name'],
      type: 'unique',      
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('prod_image','unique',{
      fields : ['name']
    })
  }
};
