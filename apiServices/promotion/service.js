const Promotion =  require('./model')

exports.createPromotion = (sequelize,data) => {
    return new Promise((resolve,reject)=>{
        Promotion(db)
        .create({
            quantity : data.quantity,
            id_product : data.id_product,
            reduction: data.reduction,
            type : data.type,
        })
        .then((promotion)=>{
            resolve(promotion)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}


exports.createPromotion = (sequelize) => {
    return new Promise((resolve,reject)=>{
        Promotion(db)
        .create({
            
        })
        .then((promotion)=>{
            resolve(promotion)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

