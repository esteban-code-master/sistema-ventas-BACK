const Cash =  require('./model')

exports.createCash = async (db,data) => {
    return new Promise ((resolve,reject)=>{
        Cash(db)
        .create({
            quantity : data.quantity,
            type : data.type,
            id_user : data.id_user,
            id_cashRegister : data.id_cashRegister
        })
        .then((resp)=>{
            resolve(resp)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

exports.getCash = (db) => {
    return new Promise ((resolve,reject)=>{
        Cash(db)
        .findAll({
            where : {
                
            }
        })
        .then((resp)=>{
            resolve(resp)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}