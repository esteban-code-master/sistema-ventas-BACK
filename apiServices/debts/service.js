const Debts = require('./model')

exports.newDebts = async (db, data) => {
    return new Promise((resolve, reject) =>{
        Debts(db)
        .create({
            id_user: data.id_user,
            amount: data.amount
        })
        .then((resp) => {
            resolve(resp)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

exports.getDebts = async (db, offset, limit) =>{
    return new Promise((resolve, reject) => {
        Debts(db)
        .findAll({
            attributes: ['id', 'date', 'amount'],
            offset: offset,
            limit: limit,
            include: [
                {
                    attributes: ['user', 'ape_father'],
                    association: 'user',
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