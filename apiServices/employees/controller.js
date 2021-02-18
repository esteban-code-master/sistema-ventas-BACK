const { db } = require('../../config')
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
        const answer = await getUsers(db)

        res.json({
            data: answer
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
        const data = req.body
        await updateUsers(db, data)

        res.status(201).json({
            status: res.statusCode,
            message: 'user updated.'
        })
    }
    catch(err){
        next(boom.internal(err))
    }
}
