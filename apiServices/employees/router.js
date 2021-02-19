const {controllerNewUsers, controllerGetUsers, controllerUpdateUsers
} = require('./controller')

const EmpleadosRouter = (router) => {
    router.post('/empleado', controllerNewUsers)
    router.get('/empleado',controllerGetUsers)
    router.put('/empleado/:id', controllerUpdateUsers)
}

module.exports = EmpleadosRouter