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
            message: 'new product created.'
        })
    }
    catch(err){        
        // console.log(err.sqlMessage)
         next(boom.internal(err))
        // res.json({
        //     err : boom.internal(err)
        // })
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