
const movementProuctController = (router) => {  
    router.get('producto/entrada') 
    router.get('producto/salida')
    router.post('producto/salida') 
    router.post('producto/entrada') 
}

module.exports = movementProuctController