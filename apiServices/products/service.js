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

exports.countProducts = async(db) => {
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

exports.updateProduct = async(db,data,id_product,transaction) =>{
    return new Promise ((resolve,reject)=>{
        Products(db)
        .update({
            code : data.code,
            name: data.name,
            description: data.description,
            price : data.price,
            existence: data.existence,
            id_category : data.id_category,                
        },
        {
            where :{
                id : id_product
            }
        },
        {
            transaction
        })
        .then(async(resp)=>{                
            resolve(await this.updateProdImage(db,id_product,data.urlImage,transaction))
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

exports.updateProdImage = (db,id_product,urlImage,transaction) =>{
    return new Promise((resolve,reject)=>{
        ProducImage(db)
        .update({            
            name : urlImage
        },
        {
            where :{
                id_product : id_product
            }
        },
        {
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

// this does remove the  product  by references embedded in the  database
exports.deleteProduct = async (db,id_product) => {
    return new Promise((resolve,reject)=>{
        Products(db)
        .update({
            status : false 
        },
        {
            where : {
                id : id_product
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
exports.findProducts = async (db)=>{
    return new Promise((resolve,reject)=>{
        Products(db)
        .findAll({
            attributes:["id","existence","price"],
            where:
            {
                id:1
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
