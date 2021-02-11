const { 
  nuevoProducto,
  consultar,
} = require('./controller')


const ProductosRouter = (router) => {    

    router.post('/producto',(req,res,next) => {
        nuevoProducto(req,res,next)
    })

    router.get('/producto',(req,res,next) =>{
        consultar(req,res,next)
    })
}


module.exports =  ProductosRouter