const { 
  createProduct,
  getPagination,
  countProductController,
  updateController
} = require('./controller')

const ProductosRouter = (router) => {    
    router.post('/producto',createProduct)
    router.get('/producto',getPagination)
    router.get('/producto/count',countProductController)
    router.put('/producto/:id',updateController)
}


module.exports =  ProductosRouter