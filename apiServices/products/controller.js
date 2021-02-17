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
        const offset = (req.query.offset >= 0)? parseInt(req.query.offset) : 0
        const limit = (req.query.limit == 10 || req.query.limit == 15 || req.query.limit == 100)? parseInt(req.query.limit) : 10
        const listProducts =  await getProduct(db,offset,limit)   
        res.json({  
            data : listProducts
        })
    }
    catch(err){
        next(boom.internal(err))    
    }  
}


