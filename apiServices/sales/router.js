const {
    controllerNewSales,
    controllerUpdateSales,
    controllerEraseSales,
    controllerGetSales
} = require('./controller')

const SalesRouter = (router) => {
    router.post('/venta', controllerNewSales)
    router.put('/venta/:id', controllerUpdateSales)
    router.get('/venta', controllerGetSales)
    router.delete('/venta/:id', controllerEraseSales)
}

module.exports = SalesRouter