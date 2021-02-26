const {
    entryProductController,
    outputProductController,
    getMovementEntryController,
    getMovementOutputController
} = require('./controller')

const movementProuctController = (router) => {  
    router.get('/producto/entrada',getMovementEntryController) 
    router.get('/producto/salida',getMovementOutputController)
    router.post('/producto/salida',outputProductController) 
    router.post('/producto/entrada',entryProductController) 
}

module.exports = movementProuctController