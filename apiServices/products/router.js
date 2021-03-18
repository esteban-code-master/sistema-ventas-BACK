const { 
  createProduct,
  getPagination,
  countProductController,
  updateController,
  deleteController
} = require('./controller')

const {PermissionManager} = require('../../utils/middleware/Roles')

const ProductosRouter = (router) => {    
    router.post('/producto',PermissionManager,createProduct)
    router.get('/producto',getPagination)
    router.get('/producto/count',countProductController)
    router.put('/producto/:id',updateController)
    router.delete('/producto/:id',deleteController)      
    router.put('/producto/:id',PermissionManager,updateController)
    router.delete('/producto/:id',PermissionManager,deleteController)    
}

module.exports =  ProductosRouter