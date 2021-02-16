const Sequelize = require('sequelize')
const config =  require('../config')
const Products = require('../apiServices/products/model')
const Category = require('../apiServices/category/model')

class Sequelizelib {

    constructor (){
        this.datos = {}
        this.sequelize = new Sequelize (
            config.db.database, 
            config.db.user,
            config.db.password, 
            {
                host: config.db.host,        
                dialect: config.db.type, 
            }
        );    
        console.log(this.sequelize.connectionManager.config.pool)  
    }

    async connection ()  {     
        try {
            await this.sequelize.authenticate();           
            return this.sequelize
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
     
}


 module.exports = Sequelizelib