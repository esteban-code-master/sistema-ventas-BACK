const {controllerNewUsers, controllerGetUsers, controllerUpdateUsers} = require('./controller')

const EmpleadosRouter = (router) => {
    router.post('/empleados', controllerNewUsers)
    router.get('/producto',controllerGetUsers)
    router.put('producto', controllerUpdateUsers)
}

module.exports = EmpleadosRouter