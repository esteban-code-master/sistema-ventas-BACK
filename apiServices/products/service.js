const Products = require('./model')
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

exports.getProduct = async (db,offset,limit) => {      
    return new Promise((resolve,reject)=>{                   
       Products(db)
        .findAll({      
           attributes: ['id','code','name','description','price','existence'],                            
           offset: offset, 
           limit: limit,        
           where : {
            status : true
           },    
           include: [
                {   
                    attributes: ['name'],
                    association : "prod_category",
                    required: true 
                },{
                    association : "prod_images",
                    attributes: ['name'],
                    required: false
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


exports.countProducts = (db) => {
    return new Promise ((resolve,reject)=>{
        Products(db)
            .count({
                where : {
                    status : true
                }
            })
            .then((resp)=>{
                resolve(resp)
            })
            .catch((err)=>{
                reject(err)
            })
    })
}
