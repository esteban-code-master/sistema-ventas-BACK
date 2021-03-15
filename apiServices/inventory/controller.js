const boom = require ('@hapi/boom')
const { json } = require('sequelize/types')
const Sequelizelib = require('../../lib/sequelize')
const seq = new Sequelizelib()

const{findProducts}=require('../products/service')

const{
    insertInventory,
    allJson
}=require('./service')

exports.createInventory = async (req,res,next) => {
    try{
        const db = await seq.connection()
        const data = req.body
        const id_inventory=await insertInventory(db,data)
        const jsonFinal = await Recorrido(res,next,id_inventory)
        foundIdPost(next,data,jsonFinal)
        res.json({            
            mensaje: "Create new inventory"
        })
    }
    catch(err){
        next(boom.internal(err))
    }
}
const foundIdPost = (next,data,jsonFinal)=>{
    try
    {
        for(let i =0 ; i<data.length;i++)
        {
            for (let e = 0; e < jsonFinal.length; e++) 
            {
                if(jsonFinal[e].id_product = data[i].id_product)
                {
                    console.log("hola");
                }
            }
        }
    }
    catch(err){
        next(boom.internal(err))
    }
}
const Recorrido = async(res,next,id_inventory)=>{
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
                    "id_prod_inventory":id_inventory.dataValues.id,
                    "Stock_system":recorrido[i].dataValues.existence,
                    "Price":recorrido[i].dataValues.price
                }
            )
        }
       return jsonFinal
    }
    catch(err)
    {
        next(boom.internal(err))
    }
}


