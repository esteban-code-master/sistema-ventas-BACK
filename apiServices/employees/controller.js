const boom = require('@hapi/boom')
const bcrypt=require('bcrypt')
const Sequelizelib = require('../../lib/sequelize')
const {newUsers, getUsers, updateUsers} = require('./service')

const sequelize = new Sequelizelib()


exports.controllerNewUsers = async (req, res, next) => {
    try{
        const db = await sequelize.connection()
        

        try {
            const hash = await bcrypt.hash(req.body.password, 10);
            req.body.password = hash;
        } catch (err) {
            next(boom.internal(err))
        }

        const data = req.body

        await newUsers(db, data)

        res.status(201).json({
            status: res.statusCode,
            message: 'new user created.'
        })

    }
    catch(err){
        next(boom.internal(err))
    }
}


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
