const boom = require('@hapi/boom')
const Sequelizelib = require('../../lib/sequelize')
const {createPromotion,getAssociationPromotion} = require('./service')

const seq = new Sequelizelib()

exports.cretePromoController = async (req,res,next) => {
    try
    {
        const db = await seq.connection()
        const data = req.body

        const promo = await createPromotion(db,data)
        res.status(201).json({
            status : res.statusCode,            
            message : 'this promotion was created  ssuccefull'
        })
    }
    catch(err)
    {
        next(boom.internal(err))    
    }
}

exports.getAssociatonController = async (req,res,next) => {
    try
    {
        const db = await seq.connection()
        const IdProduct = req.query.id
        const promo = await getAssociationPromotion(db,IdProduct)
        switch(promo.type)
        {
            case 'x' : 
            case '-' : 
            case '+' :
            case '%' :
        }
        res.status(201).json({
            status : res.statusCode,            
            message : promo
        })
    }
    catch(err)
    {
        next(boom.internal(err))    
    }
}