const Category = require('./modelo')

exports.create = async (db,value) => {  
    return new Promise((resolve, reject) => {
        Category(db)
        .create({           
            name : value
        })
        .then((resp) => {        
            resolve(resp) 
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

exports.getCategory = async(db) => {
    return new Promise ((resolve,reject)=>{
        Category(db)
        .findAll()
        .then((resp)=>{
            resolve(resp)
        })
        .catch((err)=>{
            reject(err)
        })
    })    
}

