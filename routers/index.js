const  categoryRouter  = require('../apiServices/category/router')
const  ProductosRouter = require('../apiServices/products/router')

const groupRouter = (router) => {
    categoryRouter(router)
    ProductosRouter(router)
}



module.exports = groupRouter
