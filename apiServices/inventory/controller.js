const boom = require ('@hapi/boom')
const Sequelizelib = require('../../lib/sequelize')
const seq = new Sequelizelib()

const{
    insertInventory,
    InventoryDetail
}=require('./service')
exports.createInventory = async (req,res,next) => {
    try{
        const db = await seq.connection()
        const data = req.body    
        await insertInventory(db,data)
        res.json({            
            mensaje: "Create new inventory"
        })
    }
    catch(err){
        next(boom.internal(err))
    }
}
exports.createInventoryDet=async(req,res,next)=>{
    try{
        const db = await seq.connection()
        const data = req.body
        await InventoryDetail(db,data)
        res.json({
            mensaje: "Create new inventory detail"
        })
    }
    catch(err){
        next(boom.internal(err))
    }
}