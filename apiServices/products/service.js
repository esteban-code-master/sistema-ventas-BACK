const Products = require('./model')


exports.InsertarProducto = async (db,data) => {
    return new Promise((resolve,reject)=>{
        Products(db)
        .create({
            code : data.code,
            name : data.name,
            description : data.description,
            price : data.price,
            existence: data.existence,
            id_category: data.id_category      
        })        
        .then((res)=>{
            resolve(res)            
        })
        .catch((err)=>{            
            reject(err)
        })
    })   
}


exports.getProductos = async (db) => {
    return new Promise((resolve,reject)=>{
        Products(db)
        .findAll()    
        .then((res)=>{
            resolve(res)            
        })
        .catch((err)=>{
            reject(err)
        })
    })   
}

