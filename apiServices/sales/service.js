const { Transaction } = require('sequelize/types')
const Sales = require('./model-sale')
const SaleDetails = require('./model')


exports.newSale = async (db, data) => {
    return new Promise((resolve, reject) =>{
        Sales(db)
        .create({
            date: data.date,
            id_user: data.id_user, //por modificar
            post: data.post
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


exports.updateSaleDetails = async(db, data, id_objetivo) => {
    return new Promise((resolve, reject) => {
        SaleDetails(db)
        .create({
            id_sale: data.id_sale,
            id_product: data.id_product,
            quanty: data.quanty,
            price: data.price,
            amount: data.amount
        },
        {
            where:
            {
                id: id_objetivo
            }
        })
        .then((resp) => {
            resolve(resp)
        })
        .catch((err) =>{
            reject(err)
        })
    })
}


exports.getAllSales = async(db, offset, limit) =>{
    return new Promise((resolve, reject) =>{
        SaleDetails(db)
        .findAll({
            attributes : ['id', 'quanty', 'price', 'amount'],
            offset: offset,
            limit: limit,
            include : [
                {
                    attributes: ['date', 'post'], //esta tabla tiene otro id
                    association: 'sale',
                    required: true
                },
                {
                    attributes: ['code', 'name', 'price'],
                    association: 'product',
                    required: true
                }
            ],
        })
        .then((resp) => {
            resolve(resp)
        })
        .catch((err) => {
            reject(err)
        })
    })
}