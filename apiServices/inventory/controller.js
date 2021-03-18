const boom = require ('@hapi/boom')
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
        const jsonfinal = await Recorrido(res,next,id_inventory,data)
        //await allJson(db,jsonfinal)
        res.json({            
            mensaje: "Create new inventory"
        })
    }
    catch(err){
        next(boom.internal(err))
    }
}

const Recorrido = async(res,next,id_inventory,data)=>{
    try
    {
        const db = await seq.connection()
        const recorrido = await findProducts(db)
        const jsonFinal = []
        let existence
        for(let i =0 ; i<data.length;i++)
        {
            for (let e = 0; e < recorrido.length; e++) 
            {
                if(recorrido[e].dataValues.id == data[i].id_product)
                {
                    existence = parseInt(recorrido[i].dataValues.existence) - parseInt(data[i].Stock_real)
                    console.log(existence);
                    
                }
            }
        }
       return jsonFinal
    }
    catch(err)
    {
        next(boom.internal(err))
    }
}
