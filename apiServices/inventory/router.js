const { 
    createInventory,
    Recorrido
  } = require('./controller')
  
  const InventoryRouter = (router) => {    
      router.post('/inventory',createInventory)
  }
  
  
  module.exports =  InventoryRouter