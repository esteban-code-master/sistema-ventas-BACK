const {cretePromoController,getAssociatonController}= require('./controller')

const PromotionRouter = (router) => {
    router.post('/promotion',cretePromoController)
    router.get('/promotion',getAssociatonController)
}

module.exports = PromotionRouter