const inventory_Prod = require ('./model_Prod')
const InventoryDetail = require ('./model_detail')

exports.insertInventory = async (db,data)=>{
    return new Promise((resolve,reject)=>{
        inventory_Prod(db)
        .create({
            id_user:data.id_user
        })
        .then((resp)=>{
            this.InventoryDetail(db,data,resp.dataValues.id)
            resolve(resp)
        })
        .catch((err)=>{
            reject(err)
        })
      })
}
exports.InventoryDetail = async (db,data,id_prod_inventory)=>{
    return new Promise((resolve,reject)=>{
        InventoryDetail(db)
        .create({
            id_prod_inventory: id_prod_inventory,
            id_product:2,
            Stock_real:data.Stock_real,
            Stock_system:3,
            Difference:0,
            Expenses:0
        })
        .then((resp)=>{
            console.log(resp);
            resolve(resp)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}
