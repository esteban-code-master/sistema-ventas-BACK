const ProdMovement = require('./model')
const typeMovement = {"entryProduct" : 1, "outputProduct" : 2} // id reference is in table type_acction in mysql

exports.EntryProduct = async (db,data) => {
    return new Promise ((resolve,reject)=>{
        ProdMovement(db,typeMovement.entryProduct)
        .bulkCreate(data)
        .then((resp)=>{
            resolve(resp)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

const OutputProduct = (db) => {

}

const getEntryProduct = (db) => {

}

const getOutputProduct = (db) => {
    
}
