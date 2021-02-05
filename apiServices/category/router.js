const { createCategory, consultCategory}=  require('./controller')

const categoryRouter = (router) => {
    router.post('/categoria',createCategory)    
    router.get('/categoria',consultCategory)
}


module.exports = categoryRouter