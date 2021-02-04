const { createCategory }=  require('./controller')

const categoryRouter = (router) => {
    router.post('/categoria',createCategory)    
}

module.exports = categoryRouter