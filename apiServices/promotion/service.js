const Promotion =  require('./model')

exports.createPromotion = (db,data) => {
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


exports.getAssociationPromotion = (db,IdProduct) => {
    return new Promise((resolve,reject)=>{
        Promotion(db)
        .findAll({
            attributes: ['id_product','quantity','reduction','type'],
            where : {                
                id_product : IdProduct
            }
        })
        .then((promotion)=>{
            resolve(promotion)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

