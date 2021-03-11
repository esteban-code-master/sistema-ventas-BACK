const { 
    createInventory,
    Recorrido
  } = require('./controller')
  
  const InventoryRouter = (router) => {    
      router.post('/inventory',createInventory)
      router.get('/inventory',Recorrido)
  }
  
  
  module.exports =  InventoryRouter