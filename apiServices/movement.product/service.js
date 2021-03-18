const ProdMovement = require('./model')

exports.MovementProduct  = async (db,data,typeMovement) => {
    return new Promise ((resolve,reject)=>{
        ProdMovement(db,typeMovement)
        .bulkCreate(data)
        .then((resp)=>{
            resolve(resp)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

exports.getMovementAll = async (db,offset,limit,typeMovement) => {
    return new Promise ((resolve,reject)=>{
        ProdMovement(db,typeMovement)
        .findAll({                                 
            offset: offset, 
            limit: limit,        
            where : {
             id_type : typeMovement
            },    
        })
        .then((resp)=>{
            resolve(resp)
        })
        .catch((err)=>{
            reject(err)
        })
    })
} 
