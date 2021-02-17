const { 
  createProduct,
  getPagination,
  countProductController
} = require('./controller')


const ProductosRouter = (router) => {    

    router.post('/producto',(req,res,next) => {
        createProduct(req,res,next)
    })

    router.get('/producto',(req,res,next) =>{
        getPagination(req,res,next)
    })

    router.get('/producto/count',countProductController)
}


module.exports =  ProductosRouter