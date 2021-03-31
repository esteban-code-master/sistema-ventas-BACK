const Sales = require('./model-sale')
const SaleDetails = require('./model')


exports.newSale = async (db, transaction, temp) => {
    return new Promise((resolve, reject) =>{
        Sales(db)
        .create({
            date:temp[0].date,
            id_user:temp[0].id_user,
            post:temp[0].post
        },
        {
            transaction
        })
        .then(async(sale)=>{
            resolve(sale)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

exports.newSaleDetails = async (db, transaction, temp_datosrestantes) => {
    return new Promise((resolve, reject) => {
        SaleDetails(db)
        .bulkCreate(temp_datosrestantes,{
            transaction
        })
        .then((resp) =>{
            resolve(resp)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

exports.eraseSaleDetails = async (db, transaction, id_objetivo) => {
    return new Promise((resolve, reject) => {
        SaleDetails(db)
        .destroy({
            where:
            {
                id_sale: id_objetivo
            }
        },
        {
            transaction
        })
        .then(async(sale)=> {
            await this.eraseSale(db,transaction,id_objetivo)
            resolve(sale)
        })
        .catch((err) =>{
            reject(err)
        })
    })
}

exports.eraseSale = async (db, transaction, id_objetivo) => {
    return new Promise((resolve, reject) => {
        Sales(db)
        .destroy({
            where:
            {
                id:id_objetivo
            }
        },
        {
            transaction
        })
        .then((resp) =>{
            resolve(resp)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

exports.updateSaleDetails = async(db, transaction, data, id_objetivo) => {
    return new Promise((resolve, reject) => {
        SaleDetails(db)
        .update({
            id_sale: data.id_sale,
            id_product: data.id_product,
            quanty: data.quanty,
            price: data.price,
            amount: data.amount
        },
        {
            where:
            {
                id_sale: id_objetivo
            }
        },
        {
            transaction
        })
        .then(async(sale)=>{
            await this.updateSale(db, transaction, data, id_objetivo)
            resolve(sale)
        })
        .catch((err) =>{
            reject(err)
        })
    })
}

exports.updateSale = async(db, transaction, data, id_objetivo) =>{
    return new Promise((resolve, reject) =>{
        Sales(db)
        .update({
            id_user:data.id_user,
            post: data.post
        },
        {
            where:
            {
                id: id_objetivo
            }
        },
        {
            transaction
        })
        .then((resp) =>{
            resolve(resp)
        })
        .catch((err) => {
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
                    attributes: ['date', 'id_user', 'post'], //esta tabla tiene otro id
                    association: 'sale',
                    required: true
                },
                {
                    attributes: ['code', 'name', 'price'],
                    association: 'product',
                    required: true
                }
            ]
        })
        .then((resp) => {
            resolve(resp)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

exports.getSalesDetails = async(db) => {
    return new Promise((result, reject) =>{})
}