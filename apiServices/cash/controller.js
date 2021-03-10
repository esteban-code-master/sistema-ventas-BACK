const boom = require('@hapi/boom')
const {createCash} = require('./service')

const Sequelizelib  = require('../../lib/sequelize')
const seq =  new Sequelizelib();

exports.createCashController = async ( req, res ,next) => {    
    try
    {
        const db = await seq.connection()
        const data = req.body
        await createCash(db,data)
        res.status(201).json({
            status : res.statusCode,            
        }) 
    }
    catch(error) 
    {   
        next(boom.internal(error))    
    }  
}

// exports.createCashController = async ( req, res ,next) => {    
//     try
//     {
//         const db = await sequelize.connection()
        
//     }
//     catch(error) 
//     {   
//         next(boom.internal(error))    
//     }  
// }