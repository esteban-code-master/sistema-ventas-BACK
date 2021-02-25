const {isAuth} = require('../../utils/middleware/Auth')
const { 
  createProduct,
  getPagination,
  countProductController,
  updateController,
  deleteController
} = require('./controller')

const ProductosRouter = (router) => {    
    router.post('/producto',createProduct)
    router.get('/producto',isAuth,getPagination)
    router.get('/producto/count',countProductController)
    router.put('/producto/:id',updateController)
    router.delete('/producto/:id',deleteController)    
}

module.exports =  ProductosRouter