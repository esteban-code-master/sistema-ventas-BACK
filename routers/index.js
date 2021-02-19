const  categoryRouter  = require('../apiServices/category/router')
const  ProductosRouter = require('../apiServices/products/router')
const EmpleadosRouter = require('../apiServices/employees/router')

const groupRouter = (router) => {
    categoryRouter(router)
    ProductosRouter(router)
    EmpleadosRouter(router)
}



module.exports = groupRouter
