const InventoryDetail = require ('./model_detail')

exports.servicegetinventory = async (db,data)=>{
    InventoryDetail(db)
    .create({
        id: data.code,
        id_prod_inventory: data.id_prod_inventory,
        id_product: data.id_product,
        Stock_real: data.Stock_real,
        Stock_system : data.Stock_system,
        Difference: data.Difference,
        Expenses:data.Expenses
    })
    .then((resp)=>{
        resolve(resp)
    })
    .catch((err)=>{
        reject(err)
    })
}