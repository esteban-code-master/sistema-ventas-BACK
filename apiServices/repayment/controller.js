const boom = require('@hapi/boom')
const Sequelizelib = require('../../lib/sequelize')
const sequelize = new Sequelizelib()
const {
    createRepayment,
    getRepayment,
    updateRepayment,
    deleteRepayment
} = require('./service')

exports.controllerNewRepayments = async (req, res, next) => {
    try{
        const db = await sequelize.connection()
        const data = req.body

        console.log(req)
        await createRepayment(db, data)

        res.status(201).json({
            status: res.statusCode,
            message: 'Adeudo creado.'
        })
    }
    catch(err){
        next(boom.internal(err))
    }
}

exports.controllerGetRepayments = async(req, res, next) => {
    try {
        const db = await sequelize.connection()
        const offset = (req.query.offset >= 0)? parseInt(req.query.offset) : 0
        const limit = (req.query.limit == 10 || req.query.limit == 15 || req.query.limit == 100)? parseInt(req.query.limit) : 10

        const listRepayments = await getRepayment(db, offset, limit)

        res.status(201).json({
            status: res.statusCode,
            message: listRepayments
        })
    } catch (err) {
        next(boom.internal(err))
    }
}

exports.controllerUpdateRepayments = async(req, res, next) => {
    try {
        const db = await sequelize.connection()
        const data = req.body
        const id_objetivo = req.params.id? req.params.id : null //investigar

        await updateRepayment(db, data, id_objetivo)

        res.status(201).json({
            status: res.statusCode,
            message: "Adeudo actualizado"
        })

    } catch (err) {
        next(boom.internal(err))
    }
}

exports.controllerDeleteRepayments = async (req, res, next) => {
    try {
        const db = await sequelize.connection()
        const id_objetivo = req.params.id? req.params.id : null
        await deleteRepayment(db, id_objetivo)

        res.status(201).json({
            stauts: res.statusCode,
            message: "Adeudo eliminado"
        })
    } catch (err) {
        next(boom.internal(err))
    }
}