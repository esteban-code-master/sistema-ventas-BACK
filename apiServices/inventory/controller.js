const boom = require ('@hapi/boom')
const Sequelizelib = require('../../lib/sequelize')
const seq = new Sequelizelib()

const{insertInventory}=require('./service')

exports.createInventory = async (req,res,next) => {
    try{
        const db = await seq.connection()
        const data = req.body    
        const  ola  = await insertInventory(db,data)
        res.json({            
            mensaje: "Create new inventory"
        })
    }
    catch(err){
        next(boom.internal(err))
    }

}