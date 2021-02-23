const  categoryRouter  = require('../apiServices/category/router')
const  ProductosRouter = require('../apiServices/products/router')
const InventoryRouter = require('../apiServices/inventory/router')

const groupRouter = (router) => {
    categoryRouter(router)
    ProductosRouter(router)
    InventoryRouter(router)
}



module.exports = groupRouter
