const {
    controllerNewRepayments,
    controllerGetRepayments,
    controllerUpdateRepayments,
    controllerDeleteRepayments
} = require('./controller')

const RepaymentRouter = (router) => {
    router.post('/adeudo', controllerNewRepayments)
    router.get('/adeudo', controllerGetRepayments)
    router.put('/adeudo/:id', controllerUpdateRepayments)
    router.delete('/adeudo/:id', controllerDeleteRepayments)
}

module.exports = RepaymentRouter