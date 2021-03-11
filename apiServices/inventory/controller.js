const boom = require ('@hapi/boom')
const Sequelizelib = require('../../lib/sequelize')
const seq = new Sequelizelib()

const{findProducts}=require('../products/service')

const{
    insertInventory,
    InventoryDetail,
    allJson
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
exports.Recorrido = async (req,res,next)=>{
    try
    {
        const db = await seq.connection()
        const recorrido = await findProducts(db)
        const jsonFinal = []
        for(let i =0; i<recorrido.length;i++)
        {
            jsonFinal.push
            (
                {
                    "Stock_final":recorrido[i].dataValues.existence,
                    "Price":recorrido[i].dataValues.price
                }
            )
        }
        console.log(jsonFinal);
        res.json({
            message : "holas"
        })
    }
    catch(err)
    {
        next(boom.internal(err))
    }
}