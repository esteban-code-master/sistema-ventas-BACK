const { 
    getinventory
  } = require('./controller')
  
  const InventoryRouter = (router) => {    
      router.post('/inventory',getinventory)  
  }
  
  
  module.exports =  InventoryRouter