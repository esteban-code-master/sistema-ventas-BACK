
const Sequelizelib = require('../../lib/sequelize')
const {InsertarProducto} = require('./service')

const seq = new Sequelizelib()

exports.nuevoProducto = async (req,res,next) => {
    try {        
        const db = await seq.connection()
        const data = req.body;
        const respuesta =  await InsertarProducto(db,data)   
        res.json({
            data : res.statusCode
        })
    }
    catch(err){        
        console.log(err)
    }
}