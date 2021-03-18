const inventory_Prod = require ('./model_Prod')
const InventoryDetail = require ('./model_detail')


exports.insertInventory = async (db,data,user)=>{
    return new Promise((resolve,reject)=>{
        inventory_Prod(db)
        .create({
            id_user:user.IdEmpleado
        })
        .then((resp)=>{
            resolve(resp)
        })
        .catch((err)=>{
            reject(err)
        })
      })
}

exports.allJson = async(db,jsonFinal)=>
{
    return new Promise((resolve,reject)=>{
        InventoryDetail(db)
        .bulkCreate(jsonFinal)
        .then((resp)=>{
            resolve(resp)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

