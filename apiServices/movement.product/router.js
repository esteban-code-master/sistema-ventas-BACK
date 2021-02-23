const {entryProductController,outputProductController} = require('./controller')

const movementProuctController = (router) => {  
    router.get('/producto/entrada') 
    router.get('/producto/salida')
    router.post('/producto/salida',outputProductController) 
    router.post('/producto/entrada',entryProductController) 
}

module.exports = movementProuctController