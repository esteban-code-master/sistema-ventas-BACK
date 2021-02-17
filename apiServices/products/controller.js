const boom = require('@hapi/boom')
const Sequelizelib = require('../../lib/sequelize')
const {
    InsertProduct,  
    getProduct
} = require('./service')

const seq = new Sequelizelib()

exports.createProduct = async (req,res,next) => {
    try {        
        const db = await seq.connection()    
        const data = req.body   
    
        if(data.code.length == 12){
            await db.transaction(async(transaction)=>{                      
               await InsertProduct(db,transaction,data)                             
            })  

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

exports.getPagination = async(req,res,next)=>{
    try{
        const db = await seq.connection()     
        const respuesta =  await getProduct(db)   

        res.json({
            data : respuesta
        })
    }
    catch(err){
        next(boom.internal(err))    
    }  
}