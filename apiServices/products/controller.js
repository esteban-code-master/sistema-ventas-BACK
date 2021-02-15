const boom = require('@hapi/boom')
const Sequelizelib = require('../../lib/sequelize')
const {InsertarProducto,getProductos} = require('./service')
const seq = new Sequelizelib()

exports.nuevoProducto = async (req,res,next) => {
    try {        
        const db = await seq.connection()
        const data = req.body;
        if(data.code.lenght == 12){
            await InsertarProducto(db,data)   
            res.status(201).json({
                status : res.statusCode,
                message: 'create new product'
            })
        }
        else {
            res.status(422).json({
                status : res.statusCode,
                message: 'this code should be of twelve characther'
            })
        }
    }
    catch(err){           
         next(boom.internal(err))    
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
        next(boom.internal(err))    
    }
}