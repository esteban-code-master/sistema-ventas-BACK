const  categoryRouter  = require('../apiServices/category/router')
const  ProductosRouter = require('../apiServices/products/router')
const InventoryRouter = require('../apiServices/inventory/router')
const  EmpleadosRouter = require('../apiServices/employees/router')
const  movementProuctController = require('../apiServices/movement.product/router')
const  LoginRouter = require('../apiServices/Login/router')
const  cashRouter = require('../apiServices/cash/router')
const  PromotionRouter = require('../apiServices/promotion/router')

const groupRouter = (router) => {
    LoginRouter(router)
    categoryRouter(router)
    ProductosRouter(router)
    InventoryRouter(router)
    EmpleadosRouter(router)
    movementProuctController(router)    
    cashRouter(router)
    PromotionRouter(router)
}

module.exports = groupRouter
