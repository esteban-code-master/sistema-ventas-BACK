const { 
    getinventory
  } = require('./controller')
  
  const InventoryRouter = (router) => {    
      router.get('/inventory',getinventory)  
  }
  
  
  module.exports =  InventoryRouter