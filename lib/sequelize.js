const Sequelize = require('sequelize')
const config =  require('../config')

class Sequelizelib {

    constructor (){
        this.sequelize = new Sequelize (
            config.db.database, 
            config.db.user,
            config.db.password, 
            {
                host: config.db.host,        
                dialect: config.db.type, 
            }
        );       
    }

    async connection ()  {     
        try {
            await this.sequelize.authenticate();
            console.log('Connection has been established successfully.');
            return this.sequelize
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}


 module.exports.Sequelizelib = Sequelizelib