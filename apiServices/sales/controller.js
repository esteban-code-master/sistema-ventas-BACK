const boom = require('@hapi/boom')
const Sequelizelib = require('../../lib/sequelize')
const sequelize = new Sequelizelib()
const {
    newSale,
    eraseSaleDetails,
    updateSaleDetails,
    getAllSales
} = require('./service')


exports.controllerNewSales = async (req, res, next) => {
    try{
        const db = await sequelize.connection()

        
        const data = req.body


        await db.transaction(async(transaction)=>{
            await newSale(db,transaction,data)
        })

        res.status(201).json({
            status: res.statusCode,
            message: 'Nueva venta creada'
        })
    }
    catch(err){
        next(boom.internal(err))
    }
}


exports.controllerUpdateSales = async (req, res, next) => {
    try{
        const db = await sequelize.connection()
        const data = req.body
        const id_sale = req.params.id? req.params.id : null
        await db.transaction(async(transaction) => {
            await updateSaleDetails(db, transaction,data,id_sale)
        })

        res.status(201).json({
            status: res.statusCode,
            message: 'Venta actualizada.'
        })
    }
    catch(err){
        next(boom.internal(err))
    }
}

exports.controllerEraseSales = async (req, res, next) => {
    try{
        const db = await sequelize.connection()
        const id_sale = req.params.id? req.params.id : null

        await db.transaction(async(transaction)=>{
            await eraseSaleDetails(db,transaction,id_sale)
        })

        res.status(200).json({
            status: res.statusCode,
            message: 'Realizado con éxito'
        })
    }
    catch(err){
        next(boom.internal(err))
    }
}


exports.controllerGetSales = async (req, res, next) => {
    try{
        const db = await sequelize.connection()
        const offset = (req.query.offset >= 0)? parseInt(req.query.offset) : 0
        const limit = (req.query.limit == 10 || req.query.limit == 15 || req.query.limit == 100)? parseInt(req.query.limit) : 10
        const listSales = await getAllSales(db, offset, limit)
       
        res.status(200).json({
            status: res.statusCode,
            data: listSales
        })     
    }
    catch(err){
        next(boom.internal(err))
    }
}
