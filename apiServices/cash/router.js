const {createCashController} = require('./controller')

const cashRouter = (router) => {
    router.post('/cash',createCashController)
}

module.exports = cashRouter