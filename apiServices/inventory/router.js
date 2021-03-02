const { 
    createInventory,
    createInventoryDet
  } = require('./controller')
  
  const InventoryRouter = (router) => {    
      router.post('/inventory',createInventory)
      router.post('/inventory/detail',createInventoryDet)
  }
  
  
  module.exports =  InventoryRouter