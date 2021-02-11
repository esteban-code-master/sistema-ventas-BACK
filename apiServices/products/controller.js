const Sequelizelib = require('../../lib/sequelize')
const {InsertarProducto,getProductos} = require('./service')
const boom = require('@hapi/boom')

const seq = new Sequelizelib()

exports.nuevoProducto = async (req,res,next) => {
    try {        
        const db = await seq.connection()
        const data = req.body;
        await InsertarProducto(db,data)   

        res.status(201).json({
            status : res.statusCode,
            message: 'create new product'
        })
    }
    catch(err){        
        // console.log(err.sqlMessage)
        // next(boom.badData(err))
        res.json({
            err : boom.internal()
        })
    }
}

exports.consultar = async(req,res,next)=>{
    try{
        const db = await seq.connection()
        const respuesta =  await getProductos(db)   

        res.json({
            data : respuesta
        })
    }
    catch(err){
        console.log(err.message)                     
        next(err.message)
    }
}