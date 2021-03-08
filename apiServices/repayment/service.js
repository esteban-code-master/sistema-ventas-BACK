const Repayments = require('./model')

exports.createRepayment = async(db, data) => {
    return new Promise((resolve, reject) => {
        Repayments(db)
        .create({
            id_sale:data.id_sale,
            id_product:data.id_product,
            date:data.date,
            amount:data.amount
        })
        .then((resp) => {
            resolve(resp)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

exports.getRepayment = async(db, offset, limit) => {
    return new Promise((resolve, reject) => {
        Repayments(db)
        .findAll({
            atrributes: ['id', 'date', 'amount'],
            offset: offset,
            limit: limit,
            include: [
                {
                    atrributes: ['date', 'post'],
                    association: "sale",
                    required: true
                },
                {
                    atrributes: ['code', 'name', 'price'],
                    association: "product",
                    required: true    
                }
            ]
        })
        .then((resp) => {
            resolve(resp)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

exports.updateRepayment = async(db, data, id_objetivo) => {
    return new Promise((resolve, reject) =>{
        Repayments(db)
        .update({
            id_sale: data.id_sale,
            id_product: data.id_product,
            amount: data.amount,
        },
        {
            where:
            {
                id: id_objetivo
            }
        })
        .then((resp)=>{
            resolve(resp)
        })
        .catch((err) =>{
            reject(err)
        })
    })

}

exports.deleteRepayment = async(db, id_objetivo) => {
    return new Promise((resolve, reject) => {
        Repayments(db)
        .destroy({
            where:
            {
                id: id_objetivo
            }
        })
        .then((resp)=>{
            resolve(resp)
        })
        .catch((err) =>{
            reject(err)
        })
    })
}
