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