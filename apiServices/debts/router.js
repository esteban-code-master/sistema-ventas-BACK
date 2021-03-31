const {controllerCreateDebts, controllerGetDebts}  = require('./controller')

const debtsRouter = (router) => {
    router.post('/deudas', controllerCreateDebts)
}

module.exports = debtsRouter