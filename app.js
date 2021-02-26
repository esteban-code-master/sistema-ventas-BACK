const express = require('express')
const bodyParser = require("body-parser");
const session = require('express-session');
const groupRouter = require('./routers');
const isAuth = require('./utils/middleware/Auth')
const handdleError = require('./utils/middleware/handdleError')
const notFoundHandler = require('./utils/middleware/notFound')

const router = express.Router();
const app = express()

app.use(session({secret:'hola',resave:false,saveUninitialized:false}))
app.use(bodyParser.json())
app.use(isAuth)
app.use('/api',router)

//middlewares error
app.use(notFoundHandler)
app.use(handdleError)
groupRouter(router)

module.exports = app;
