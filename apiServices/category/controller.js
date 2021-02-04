const Sequelizelib  = require('../../lib/sequelize')
const {create}  = require('./service')

const sequelize =  new Sequelizelib();

exports.createCategory = async ( req, res) => {    
    try
    {
        const db = await sequelize.connection()
        const category = (req.body.name)? req.body.name : null
        const data = await create(db,category)

        res.json({
            status : res.statusCode,
            data : data
        })
    }
    catch(error) 
    {   
        console.error(error)
    }  
}