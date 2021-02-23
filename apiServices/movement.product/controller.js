const boom = require('@hapi/boom')
const Sequelizelib = require('../../lib/sequelize')
const { EntryProduct } = require('./service')

const seq = new Sequelizelib()

exports.entryProductController = async (req,res,next) => {
    try 
    {
        const db =  await seq.connection()
        const data = req.body      
        let temp = []   
        if(Array.isArray(data)) { temp = data }
        else { temp.push(data) }    
        temp.find(async(propety) => {
            if(propety.hasOwnProperty('quantity') &&
               propety.hasOwnProperty('id_product') &&
               propety.hasOwnProperty('id_user')){                    
                const resp = await EntryProduct(db,temp)
                res.status(201).json({
                  status: res.statusCode,
                  message : 'entry products were  created successfully',
                  data : resp                   
              }) 
            }
            else {
                res.status(422).json({
                    status: res.statusCode,
                    message : 'json properties are not correct'          
                }) 
            }
        }) 
                             
    }
    catch(err)
    {
        next(boom.internal(err))
    }
}