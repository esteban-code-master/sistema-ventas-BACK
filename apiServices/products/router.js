const {nuevoProducto} = require('./controller')


const ProductosRouter = (router) => {    
    router.post('/crearProducto',function(req,res,next){
            nuevoProducto(req,res,next)
    })

}


module.exports =  ProductosRouter