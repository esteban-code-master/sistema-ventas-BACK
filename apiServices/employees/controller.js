const boom = require('@hapi/boom')

const Sequelizelib = require('../../lib/sequelize')
const {newUsers, getUsers, updateUsers} = require('./service')

const sequelize = new Sequelizelib()

/*Función para crear un nuevo usuario */
exports.controllerNewUsers = async (req, res, next) => {
    try{
        const db = await sequelize.connection() //conexión con base de datos
        const data = req.body //se ingresan los datos en un objeto

        await newUsers(db, data) //se invoca a la función

        res.status(201).json({
            status: res.statusCode,
            message: 'new user created.'
        })

    }
    catch(err){
        next(boom.internal(err))
    }
}
/*Función para solicitar usuarios */
exports.controllerGetUsers = async(req, res, next) => {
    try{
        const db = await sequelize.connection()
        const offset = (req.query.offset >= 0)? parseInt(req.query.offset) : 0
        const limit = (req.query.limit == 10 || req.query.limit == 15 || req.query.limit == 100)? parseInt(req.query.limit) : 10
        const listProducts = await getUsers(db, offset, limit)
        res.status(200).json({
            status: res.statusCode,
            data: listProducts
        })
    }
    catch(err){
        next(boom.internal(err))
    }
}


/*Función para actualizar usuarios*/
exports.controllerUpdateUsers = async(req, res, next) => {
    try{
        const db = await sequelize.connection()
        const id_employee = req.params.id? req.params.id : null
        const data = req.body
        await updateUsers(db, data, id_employee)

        res.status(201).json({
            status: res.statusCode,
            message: 'user updated.'
        })
    }
    catch(err){
        next(boom.internal(err))
    }
}
