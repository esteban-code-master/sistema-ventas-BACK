const { Transaction } = require('sequelize/types')
const Sales = require('./model-sale')
const SaleDetails = require('./model-saledetail')

//AddnewSale
exports.newSale = async (db, data) => {
    return new Promise((resolve, reject) =>{
        Sales(db)
        .create({
            date: data.date,
            id_session: data.id_session
        })
        .then((resp) =>{
            resolve(resp)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

exports.newSaleDetails = async (db, data) => {
    return new Promise((resolve, reject) => {
        SaleDetails(db)
        .create({
            id_sale: data.id_sale,
            id_product: data.id_product,
            quanty: data.quanty,
            price: data.price,
            amount: data.amount
        })
        .then((resp) =>{
            resolve(resp)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

//EraseSale
/*exports.eraseSaleDetails = async (db, data) => {
    return new Promise((resolve, reject) => {
        SaleDetails(db)
        .create({
            
        })
    })
}*/
//UpdateSale
exports.updateSaleDetails = async(db, data) => {
    return new Promise((resolve, reject) => {
        SaleDetails(db)
        .create({
            id_sale: data.id_sale,
            id_product: data.id_product,
            quanty: data.quanty,
            price: data.price,
            amount: data.amount
        })
        .then((resp) => {
            resolve(resp)
        })
        .catch((err) =>{
            reject(err)
        })
    })
}

//ShowSale
