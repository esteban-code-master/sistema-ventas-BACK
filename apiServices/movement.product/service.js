const ProdMovement = require('./model')

exports.MovementProduct  = (db,data,typeMovement) => {
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

const getEntryProduct = (db) => {

}

const getOutputProduct = (db) => {
    
}
