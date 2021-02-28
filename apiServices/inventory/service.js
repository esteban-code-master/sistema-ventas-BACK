const inventory_Prod = require ('./model_Prod')

exports.insertInventory = async (db,data)=>{
    return new Promise((resolve,reject)=>{
        inventory_Prod(db)
        .create({
            date:data.date,
            id_user:data.id_user
        })
        .then((resp)=>{
            console.log(resp.getDataValue("id"));
            resolve(resp)
        })
        .catch((err)=>{
            reject(err)
        })
      })
}
//huevos
//tortillas
//jamones