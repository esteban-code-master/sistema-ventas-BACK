const boom = require('@hapi/boom')
const Sequelizelib = require('../../lib/sequelize')

const {
    InsertProduct,  
    getProduct,
    countProducts,
    updateProduct,
    deleteProduct
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
              //  status : res.statusCode,
                message: 'create new product'
            })      
        }
        else {
            res.status(422).json({
                //status : res.statusCode,
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
        res.status(200).json({  
            status : res.statusCode,                          
            user :  req.payload,
            data : listProducts            
        })
    }
    catch(err){
        next(boom.internal(err))    
    }  
}


exports.countProductController = async (req,res,next) =>{
    try{
        const db = await seq.connection()     
        const count  = await countProducts(db)
        res.status(200).json({
            status : res.statusCode,
            count : count
        })
    }
    catch(err){
        next(boom.internal(err))    
    }  
}

exports.updateController = async (req,res,next) => {
    try {
        const db = await seq.connection()  
        const id_product = req.params.id? req.params.id : null  
        const data = req.body

        if(id_product != null){                           
            await db.transaction(async(transaction)=>{                      
                 await updateProduct(db,data,id_product,transaction)   
             })                                                     
            res.status(201).json({
                status : res.statusCode,
                message : 'this product update successful'        
            })
        }
        else {
            res.status(422).json({
                status : res.statusCode,
                message: 'this id product is null'
            })
        }    
    }   
    catch (err) 
    {
        next(boom.internal(err))    
    }
}

exports.deleteController = async(req,res,next) => {
    try
    {
        const db = await seq.connection()  
        const id_product =  req.params.id? req.params.id : null
        if(id_product !== null){
            const resp = await deleteProduct(db,id_product)
            res.status(201).json({
                status : res.statusCode,
                data : resp,
                message : 'this product update successful'        
            })
        }
        else{
            res.status(422).json({
                status : res.statusCode,
                message: 'this id product is null'
            })
        }
    }
    catch(err)
    {   
        next(boom.internal(err))    
    }
}


