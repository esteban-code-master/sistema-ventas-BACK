const { 
    createInventory,
    showInventory,
    showExpenses    
  } = require('./controller')
  
  const InventoryRouter = (router) => {    
      router.post('/inventory',createInventory)
      router.get('/inventory',showInventory)
      router.get('/inventory/expenses',showExpenses)
  }
  
  
  module.exports =  InventoryRouter