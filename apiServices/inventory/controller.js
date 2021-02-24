const boom = require ('@hapi/boom')
const Sequelizelib = require('../../lib/sequelize')
const seq = new Sequelizelib()

const{servicegetinventory}=require('./service')

exports.getinventory = async (req,res,next) => {
    try{
        const data = req.body
        
        const db = await seq.connection()
            await servicegetinventory(db,data)
        res.json({
            mensaje: "lo lograste"
        })
    }
    catch(err){
        next(boom.internal(err))
    }

}