const Products = require('./model')
const Category = require('../category/model')
const ProducImage = require('./model-images')


exports.InsertProduct = async (db,transaction,data) => {
    return new Promise((resolve,reject)=>{      
        Products(db)
        .create({
            code : data.code,
            name : data.name,
            description : data.description,
            price : data.price,
            existence: data.existence,
            id_category: data.id_category      
        },{
            transaction
        })        
        .then(async(product)=>{            
            if(data.urlImage){
                await this.InsertImages(db,transaction,product.dataValues.id,data.urlImage)  
            }            
            resolve(product)               
        })
        .catch((err)=>{            
            reject(err)
        })
    })   
}

exports.InsertImages = async (db,transaction,id,urlImage) => {
    return new Promise ((resolve,reject)=>{
        ProducImage(db)
        .create({
            id_product : id,
            name : urlImage
        },{
            transaction
        })
        .then((resp)=>{                                
            resolve(resp)               
        })
        .catch((err)=>{            
            reject(err)
        })
    })
}

exports.getProduct = async (db) => {
    const datos = {}
datos.connection = db
datos.product = Products(datos.connection)
datos.category = Category(datos.connection)
datos.product.associate(datos)
datos.category.associate(datos)

console.log
    return new Promise(async(resolve,reject)=>{                   
     await  datos.product.findAll({                  
           include: [
               {   
                 association : "category",
                 required: true                
                }
            ],
        })    
        .then((res)=>{
            resolve(res)            
        })
        .catch((err)=>{
            reject(err)
        })
    })   
}

