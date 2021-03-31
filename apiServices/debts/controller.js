const { db } = require('../../config');
const boom = require('@hapi/boom')
const { QueryTypes } = require('sequelize');
const Sequelizelib  = require('../../lib/sequelize')
const {newDebts, getDebts}  = require('./service')
const {getSales}  = require('../sales/service')

const sequelize = new Sequelizelib()

exports.controllerCreateDebts = async (req, res, next) => {
    try{
        //const db = await sequelize.connection()
        
    }
    catch(error){
        next(boom.internal(error))
    }
}



exports.controllerGetDebts = async(req, res, next) => {
    try {
        const db = await sequelize.connection()
        const offset = (req.query.offset >= 0)? parseInt(req.query.offset) : 0
        const limit = (req.query.limit == 10 || req.query.limit == 15 || req.query.limit == 100)? parseInt(req.query.limit) : 10
        const listDebts = await getDebts(db, offset, limit)

        res.status(200).json({
            status: res.statusCode,
            data: listDebts
        })
    } catch (error) {
        next(boom.internal(error))
    }
}