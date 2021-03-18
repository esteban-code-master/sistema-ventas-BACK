require('dotenv').config()

module.exports = {
    db: {
        type : process.env.DB_TYPE,
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        host : process.env.DB_HOST,
        database : process.env.DB_NAME,
        port : process.env.DB_PORT,
    },
    server : {
        port : process.env.PORT
    },
    key : {
        secret : process.env.SECRET_KEY
    }
}   