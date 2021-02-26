const isAuth = require('../../utils/middleware/Auth')
const {loginController,getDataFromToken} = require('./controller')

const LoginRouter = (router) => {
    router.post('/login',loginController)  
    router.get('/login/info',getDataFromToken)   
}

module.exports = LoginRouter