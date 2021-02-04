const Category = require('./modelo')

exports.create = async (db,value) => {  
    return new Promise((resolve, reject) => {
        Category(db)
            .create({           
                name : value
            })
            .then((resp) => {        
                resp ? resolve(resp) : reject(resp)
            })
    })
}
