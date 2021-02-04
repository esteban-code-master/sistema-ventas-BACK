const  categoryRouter  = require('../apiServices/category/router')

const groupRouter = (router) => {
    categoryRouter(router)
}

module.exports = groupRouter
