const {entryProductController} = require('./controller')

const movementProuctController = (router) => {  
    router.get('/producto/entrada') 
    router.get('/producto/salida')
    router.post('/producto/salida') 
    router.post('/producto/entrada',entryProductController) 
}

module.exports = movementProuctController