const inventory_Prod = require ('./model_Prod')
const InventoryDetail = require ('./model_detail')


exports.insertInventory = async (db,data)=>{
    return new Promise((resolve,reject)=>{
        inventory_Prod(db)
        .create({
            id_user:2
        })
        .then((resp)=>{
            resolve(resp)
        })
        .catch((err)=>{
            reject(err)
        })
      })
}


