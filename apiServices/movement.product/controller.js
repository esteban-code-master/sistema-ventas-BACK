const boom = require('@hapi/boom')
const Sequelizelib = require('../../lib/sequelize')
const { EntryProduct,MovementProduct } = require('./service')

const seq = new Sequelizelib()
const typeMovement = {"entryProduct" : 1, "outputProduct" : 2} // id reference is in table type_acction in mysql

exports.entryProductController = async (req,res,next) => {
    try 
    {
        const db =  await seq.connection()
        const data = req.body      
        const [status,resp] = await baseProductMovementController(db,data,res,typeMovement.entryProduct)                  
        if(status){
            res.status(200).json({
                status: res.statusCode,
                data : resp,
                message : 'entry product were created successfully'          
            }) 
        }    
    }
    catch(err)
    {
        next(boom.internal(err))
    }
}

exports.outputProductController = async(req,res,next) => {
    try 
    {
        const db =  await seq.connection()
        const data = req.body 
        const [status,resp] = await baseProductMovementController(db,data,res,typeMovement.outputProduct)                  
        if(status){
            res.status(200).json({
                status: res.statusCode,
                data : resp,
                message : 'output product were created successfully'          
            }) 
        }
    }
    catch (err) 
    {
        next(boom.internal(err))

    }
}

const baseProductMovementController = async (db,data,res,typeMovement) => {   
    return new Promise((resolve ,reject)=>{
        let temp = []                
        if(Array.isArray(data)) { temp = data }
        else { temp.push(data) }    
        temp.find(async(propety) => {
            if(propety.hasOwnProperty('quantity') &&
            propety.hasOwnProperty('id_product') &&
            propety.hasOwnProperty('id_user')){                                
                await MovementProduct(db,temp,typeMovement)                                   
                .then((resp)=>{
                    resolve([true,resp])
                })  
                .catch((err)=>{
                   reject(err)
                })                                                                     
            }   
            else {           
                res.status(422).json({
                    status: res.statusCode,
                    message : 'json properties are not correct'          
                }) 
            }
        })        
    })
}