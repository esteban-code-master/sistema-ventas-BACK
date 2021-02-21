'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('product', {
      fields: ['code'],
      type: 'unique',      
    });
  },

  down: async (queryInterface, Sequelize) => {    
    await queryInterface.removeConstraint('product','unique',{
      fields : ['code']
    })
  }
};
