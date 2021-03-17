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
        let temp = [], temp_datosrestantes = []
        temp.push({
            "id_user":data[0].id_user,
            "date":data[0].date,
            "post":data[0].post
        })
        
        for (let index = 0; index < data.length; index++) {
            temp_datosrestantes.push({
                "id_sale":"1", //this fake id will be replaced in a hook.
                "id_product":data[index].id_product,
                "quanty":data[index].quanty,
                "price":data[index].price,
                "amount":data[index].amount
            })
        }

        temp_datosrestantes.find(async(property) => {
            if(property.hasOwnProperty('id_sale') && property.hasOwnProperty('id_product') && 
            property.hasOwnProperty('quanty') && property.hasOwnProperty('price') && property.hasOwnProperty('amount')) {
                await db.transaction(async(transaction)=>{
                    await newSale(db,transaction,temp,temp_datosrestantes)
                })
            }
            else{
                res.status(422).json({
                    status: res.statusCode,
                    message: 'json properties are not correct'
                })
            }
        })
        res.status(201).json({
            status: res.statusCode,
            message: 'Nuevas ventas creadas.'
        })
    }
    catch(err){
        next(boom.internal(err))
    }
}

const InfoCollector = async(temp, jsonfinal) => {
    try {
        //const jsonfinal = []
        
            jsonfinal.push(
                {
                    "id_user":temp[i].dataValues.id_sale,
                    "id_product":temp[i].dataValues.id_product,
                    "quanty":temp[i].dataValues.quanty,
                    "price":temp[i].dataValues.price,
                    "amount":temp[i].dataValues.amount
                }
            )
        
        return jsonfinal
    } catch (err) {
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
