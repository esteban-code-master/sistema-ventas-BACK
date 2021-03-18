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
        const user = req.payload
        const db = await seq.connection()
        const data = req.body
        const id_inventory=await insertInventory(db,data,user)
        const jsonfinal = await Recorrido(res,next,id_inventory,data)
        await allJson(db,jsonfinal)
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
        let diferencia
        let precio
        parseFloat(precio)
        for(let i =0 ; i<data.length;i++)
        {
            for (let e = 0; e < recorrido.length; e++) 
            {
                if(data[i].id_product == recorrido[e].dataValues.id)
                {
                diferencia = parseInt(data[i].Stock_real) - parseInt(recorrido[e].dataValues.existence)
                precio = parseInt(recorrido[e].price) * diferencia
                jsonFinal.push
                (
                    {
                        "id_prod_inventory": id_inventory.id,
                        "id_product":recorrido[e].dataValues.id,
                        "Stock_system":recorrido[e].dataValues.existence,
                        "Stock_real":data[i].Stock_real,
                        "Difference":diferencia,
                        "Expenses":precio
                    }
                )
                }
            }
        }
        console.log("hola");        
       return jsonFinal
    }
    catch(err)
    {
        next(boom.internal(err))
    }
}