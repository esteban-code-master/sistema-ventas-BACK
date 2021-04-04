const inventory_Prod = require ('./model_Prod')
const InventoryDetail = require ('./model_detail')
const { Op } = require("sequelize")


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

exports.get =  async(db,month,day)=>{
    return new Promise(async(resolve,reject)=>{
       const [data,metadata]  = await db.query(`SELECT d.id,d.id_prod_inventory,pi.date,p.name as product, d.Stock_real,d.Stock_real,d.Difference,d.Expenses
       FROM inventory_detail AS d 
       INNER JOIN product AS p ON p.id = d.id_product 
       INNER JOIN prod_inventory AS pi ON pi.id = d.id_prod_inventory where pi.date like "%${month}%" and pi.date like "%${day}%"`)
       resolve(data)
    })
}
exports.expenses = async (db,month,day)=>{
    return new Promise(async(resolve,reject)=>{
            const [data,metadata]  = await db.query(`SELECT pi.date,sum(Expenses) as expensesTotal
            FROM inventory_detail as d
            INNER JOIN product as p on p.id = d.id_product
            INNER JOIN prod_inventory AS pi ON pi.id = d.id_prod_inventory 
            where pi.date like '%${month}%' and pi.date like "%${day}%"
            GROUP BY pi.id`)
            resolve(data)
    })
}