const { db } = require('../../config');
const Sequelizelib  = require('../../lib/sequelize')
const {create,getCategory }  = require('./service')

const sequelize =  new Sequelizelib();

exports.createCategory = async ( req, res ,next) => {    
    try
    {
        const db = await sequelize.connection()
        const category = (req.body.name)? req.body.name : null

        if(category !== null){
            const data = await create(db,category)
            res.json({
                status : res.statusCode,
                data : data
            })    
        }
        else{
            next(null)
        }
    }
    catch(error) 
    {   
        next(boom.internal(error))    
    }  
}

exports.consultCategory = async (req,res,next)=>{

    try{
        const db = await sequelize.connection()
        const getData = await getCategory(db)
        res.json({
            status: res.statusCode,
            message: getData
        })
     }           
     catch(err){
        next(boom.internal(err))    
     }
}